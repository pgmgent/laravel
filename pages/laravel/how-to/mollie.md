# Mollie payment

Om online payment toe te voegen aan je project kan je gebruik maken van een payment provider zoals [Mollie](https://www.mollie.com/nl/).

## Installatie

Installeer de Mollie package via composer:

```bash
ddev composer require mollie/mollie-api-php
```

## Configuratie
Voeg je Mollie API key toe aan je `.env` bestand:

```env
MOLLIE_API_KEY=your_mollie_api_key_here
```
Vervang `your_mollie_api_key_here` door je daadwerkelijke API (test) key die je kunt vinden in je Mollie dashboard.

## Gebruik

In je checkout process kan je nu de Mollie API gebruiken om betalingen te verwerken. Hieronder zie je een voorbeeld van een checkout methode in een Laravel controller (bv OrderController ):

```php
public function checkout(Request $request) {
    
    $mollie = new MollieApiClient();
    $mollie->setApiKey(config('services.mollie.key'));

    $name = $request->input('name') ?? '';
    $address = $request->input('address') ?? '';
    $product_id = $request->input('product_id') ?? 0;
    $amount = $request->input('amount') ?? 0;    
    $amount = $amount / 100;

    $order = new Order([
        'name' => $request->input('name'),
        'address' => $request->input('address'),
        'product_id' => $request->input('product_id'),
        'amount' => $amount,
        'payment_status' => 'pending',
    ]);

    $order->save();

      //Indien er meerdere producten (orderlines) per order zijn moet je hier ook de items toevoegen via een relatie en opslaan via $order->items()->saveMany($items)

    $payment = $mollie->payments->create([
        "amount" => [
            "currency" => "EUR",
            "value" => number_format($amount, 2, '.', ''), 
        ],
        "description" => "Order #" . $order->id,
        "redirectUrl" => route('checkout.success', ['order_id' => $order->id]),
        "webhookUrl"  => route('checkout.webhook'),
        "metadata"    => [
            "order_id" => $order,
        ],
    ]);

    DB::table('orders')->where('id', $order->id)->update([
        'payment_id' => $payment->id,
    ]);

    return redirect($payment->getCheckoutUrl(), 303);
    
}
```

Hierna wordt de gebruiker doorgestuurd naar de Mollie betaalpagina. Na succesvolle betaling wordt de gebruiker teruggestuurd naar de `redirectUrl` die je hebt opgegeven.

```php
public function success(Request $request) {
    $order_id = $request->query('order_id');
    $order = Order::find($order_id);

    if(!$order) {
        return redirect('/checkout')->with('error', 'Order not found.');
    }

    $mollie = new MollieApiClient();
    $mollie->setApiKey(config('services.mollie.key'));

    $payment = $mollie->payments->get($order->payment_id);

    $status = $payment->status ?? 'unknown';
    $method = $payment->method ?? 'unknown';
    
    DB::table('orders')->where('id', $order->id)->update([
        'payment_status' => $status,
        'payment_method' => $method,
    ]);



    if($payment->isPaid()) {
        return view('checkout.success', ['order' => $order]);
    } else {
        return redirect('/checkout')->with('error', 'Payment not completed.');
    }
}
```

Vergeet niet van ook een webhook endpoint te maken. Een webhook is een manier voor Mollie om je applicatie te informeren over wijzigingen in de status van een betaling. Bijvoorbeeld wanneer de bezoeker kiest om te betalen via overschrijving, kan het enkele dagen duren voordat de betaling is voltooid. Mollie zal dan een verzoek sturen naar je webhook URL om je op de hoogte te stellen van de statuswijziging.   


```php
public function webhook(Request $request) {
    $mollie = new MollieApiClient();
    $mollie->setApiKey(config('services.mollie.key'));

    $payment_id = $request->input('id');
    $payment = $mollie->payments->get($payment_id);

    $order = Order::where('payment_id', $payment_id)->first();
    
    $status = $payment->status ?? 'unknown';
    $method = $payment->method ?? 'unknown';
    
    DB::table('orders')->where('id', $order->id)->update([
        'payment_status' => $status,
        'payment_method' => $method,
    ]);

    //Hieronder kan je nog extra acties uitvoeren, zoals het versturen van een bevestigingsmail
}    
```
