<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function submitForm(Request $request) {
        require '../vendor/autoload.php'; // If you're using Composer (recommended)
        // Comment out the above line if not using Composer
        // require("<PATH TO>/sendgrid-php.php");
        // If not using Composer, uncomment the above line and
        // download sendgrid-php.zip from the latest release here,
        // replacing <PATH TO> with the path to the sendgrid-php.php file,
        // which is included in the download:
        // https://github.com/sendgrid/sendgrid-php/releases
        
        $name = $request->input('name');
        $fromEmail = $request->input('email');
        $content = $request->input('content');
        $appEmail = getenv('APP_EMAIL');
        $emailBody = "
            <p>
                <strong>Name:</strong> $name
                <br />
                <strong>Email:</strong> $fromEmail
            </p>

            <p><strong>Message:</strong></p>

            <p><em>$content</em></p>
        ";

        $email = new \SendGrid\Mail\Mail(); 
        $email->setFrom($appEmail, $name);
        $email->setSubject("CONTACT FORM - $name <$fromEmail>");
        $email->addTo($appEmail);
        $email->addContent("text/html", $emailBody);
    
        $receipt = new \SendGrid\Mail\Mail(); 
        $receipt->setFrom($appEmail, 'Chris Webb Developer');
        $receipt->setSubject('Your email has been received');
        $receipt->addTo($fromEmail);
        $receipt->addContent("text/html",
            "
                <p>Thank you for your email, I'll will reply to you ASAP!</p>
                <p>Your email:</p>
            "
            .   $emailBody
        );
        
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        
        try {
            $response = $sendgrid->send($email);
            $sendReceipt = $sendgrid->send($receipt);
            echo $response->statusCode();
        } catch (Exception $e) {
            echo 'Caught exception: '. $e->getMessage() ."\n";
        }
    }
}
