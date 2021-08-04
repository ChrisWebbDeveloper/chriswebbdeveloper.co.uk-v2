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
    
        $email = new \SendGrid\Mail\Mail(); 
        $email->setFrom("webb.christopher@live.co.uk", "Contact form");
        $email->setSubject('Request from contact form - ' . $name . ' <' . $fromEmail . '>');
        $email->addTo("webb.christopher@live.co.uk");
        $email->addContent("text/html", "Message from website:\n\n\n");
        $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        
        try {
            $response = $sendgrid->send($email);
            echo $response->statusCode();
        } catch (Exception $e) {
            echo 'Caught exception: '. $e->getMessage() ."\n";
        }
    }
}
