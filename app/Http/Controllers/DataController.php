<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;
use App\Models\Project;
use App\Models\Contact;

class DataController extends Controller
{
    public function getData()
    {
        //About
        $about = About::find(1);
        $skills = $about->skills;

        foreach($skills as $key => $value) {
            $value['exp'] = (int)$value['exp'];
            unset($skills[$key]['about_id']);
        };

        //Projects
        $projects = Project::get();

        foreach($projects as $project) {
            $projTechs = $project->technologies;

            foreach ($projTechs as $key => $value) {
                $value['position'] = (int)$value['pivot']['position'];
                unset($projTechs[$key]['pivot']);
            };
        };

        //Contact
        $contact = Contact::find(1);
        $contact['include_form'] = (boolean)$contact['include_form'];
        $contactLinks = $contact->links;

        foreach($contactLinks as $key => $value) {
            $links = $contact['links'];
            $links[$value['name']] = $value['link'];
            unset($links[$key]);
        };

        //Data Output
        $data = array();
        $data['about'] = $about;
        $data['projects'] = $projects;
        $data['contact'] = $contact;

        return $data;
    }
}
