<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //About
        DB::table('about')->insert([
            'title' => 'I\'m Chris, a Full Stack Developer',
            'description' => 'Based in Nottingham, I am self-taught in a variety of languages, from ASP.NET Core to PHP to SQL and all the way back to Sass and TypeScript. I have been continously learning for the past 6 years, picking up on all sorts to make me effective at creating and deploying Web Applications, sites and technologies.\n\nSince 2018, I have been working for the NHS to develop multiple systems to help streamline the patient admission and Nursing process through 3rd party software via JavaScript, as well as building full web applications (PHP, PostgreSQL, Sass, Bootstrap and JavaScript) and apps (Ionic with AngularJS) for use in a large trust.\n\nIn my spare time, I have been looking into ASP.NET Core & C#, EF6, ReactJS, as well as deployment and general best practices, such as Docker, Linux-based server maintenance and Git version control.\n\nWhen I am not coding I can be found in the gym, watching movies, playing games or listening to True Crime Podcasts.',
            'image_url' => 'aboutImg.jpg',
            'current_project' => 'Building this website in ReactJS and Laravel'
        ]);


        //About Skills
        DB::table('about_skills')->insert([
            'name' => 'PHP',
            'exp' => 70
        ]);

        DB::table('about_skills')->insert([
            'name' => 'ASP.Net Core',
            'exp' => 70
        ]);

        DB::table('about_skills')->insert([
            'name' => 'C#',
            'exp' => 70
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Entity Framework 6',
            'exp' => 70
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Javascript',
            'exp' => 95
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Typescript',
            'exp' => 60
        ]);
        
        DB::table('about_skills')->insert([
            'name' => 'HTML5',
            'exp' => 100
        ]);

        DB::table('about_skills')->insert([
            'name' => 'CSS',
            'exp' => 100
        ]);

        DB::table('about_skills')->insert([
            'name' => 'SASS',
            'exp' => 70
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Bootstrap',
            'exp' => 95
        ]);

        DB::table('about_skills')->insert([
            'name' => 'SQL (SQL Server, PostgreSQL, MySQL)',
            'exp' => 80
        ]);

        DB::table('about_skills')->insert([
            'name' => 'MongoDB',
            'exp' => 30
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Docker',
            'exp' => 30
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Git',
            'exp' => 75
        ]);

        DB::table('about_skills')->insert([
            'name' => 'APIs',
            'exp' => 60
        ]);

        DB::table('about_skills')->insert([
            'name' => 'Ionic',
            'exp' => 20
        ]);

        DB::table('about_skills')->insert([
            'name' => 'AngularJS',
            'exp' => 10
        ]);

        DB::table('about_skills')->insert([
            'name' => 'ReactJS',
            'exp' => 40
        ]);


        //Technologies
        DB::table('technologies')->insert([
            'id' => 1,
            'name' => 'Javascript'
        ]);

        DB::table('technologies')->insert([
            'id' => 2,
            'name' => 'ReactJS'
        ]);

        DB::table('technologies')->insert([
            'id' => 3,
            'name' => 'PHP'
        ]);
        
        DB::table('technologies')->insert([
            'id' => 4,
            'name' => 'Laravel'
        ]);

        DB::table('technologies')->insert([
            'id' => 5,
            'name' => 'Wordpress'
        ]);

        DB::table('technologies')->insert([
            'id' => 6,
            'name' => 'CSS'
        ]);

        DB::table('technologies')->insert([
            'id' => 7,
            'name' => 'SASS'
        ]);

        DB::table('technologies')->insert([
            'id' => 8,
            'name' => 'Bootstrap'
        ]);

        DB::table('technologies')->insert([
            'id' => 9,
            'name' => 'MySQL'
        ]);

        DB::table('technologies')->insert([
            'id' => 10,
            'name' => 'SQLite'
        ]);

        DB::table('technologies')->insert([
            'id' => 11,
            'name' => 'ASP.Net Core'
        ]);

        DB::table('technologies')->insert([
            'id' => 12,
            'name' => 'C#'
        ]);

        DB::table('technologies')->insert([
            'id' => 13,
            'name' => 'Typescript'
        ]);

        DB::table('technologies')->insert([
            'id' => 14,
            'name' => 'Gulp.js'
        ]);



        //Projects
        DB::table('projects')->insert([
            'id' => 1,
            'name' => 'Chris Webb Developer',
            'description' => 'You are currently here! This site was designed using Laravel with ReactJS components, and provided with bootstrap styling via ReactBootstrap.\n\nThe backend has been used to provide APIs for pulling through the information displayed here (linked to an SQLite database), as well as handling the Contact form through Sendgrid.\n\nSASS is also used throughout for elegant styling.',
            'link' => '/',
            'image_url' => 'chriswebbdeveloper.jpg'
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 2,
            'position'=> 0
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 1,
            'position'=> 1
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 4,
            'position'=> 2
        ]);
        
        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 3,
            'position'=> 3
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 10,
            'position'=> 4
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 7,
            'position'=> 5
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 1,
            'technology_id' => 8,
            'position'=> 6
        ]);


        DB::table('projects')->insert([
            'id' => 2,
            'name' => 'Kelly Daniels Photography',
            'description' => 'A photography portfolio website developed using Wordpress. A theme has been used and overhauled with custom styling via css as well as alteration to PHP throughout. This is maintained using the Wordpress admin tools and run using a MySQL database.',
            'link' => 'https://kellydanielsphotography.co.uk',
            'image_url' => 'kellydanielsphotography.jpg'
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 2,
            'technology_id' => 5,
            'position'=> 0
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 2,
            'technology_id' => 6,
            'position'=> 1
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 2,
            'technology_id' => 3,
            'position'=> 2
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 2,
            'technology_id' => 9,
            'position'=> 3
        ]);


        DB::table('projects')->insert([
            'id' => 3,
            'name' => 'Portfolio Builder',
            'description' => 'An ASP.Net Core 5 project that allows users to log in and arrange, display and sort portfolios. This allows photos to be uploaded, details and titles provided, and then included in various portfolios, and potentially in different categories. Portfolios can be kept in draft, privatised, or featured.\n\nAbout sections allow details and images to be included, and Contacts allows social media links to be included. This links to a MySQL database, and uses Typescript and SASS for functionality and styling.',
            'link' => 'https://github.com/ChrisWebbDeveloper/portfolio-builder',
            'image_url' => 'portfoliobuilder.jpg'
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 3,
            'technology_id' => 11,
            'position'=> 0
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 3,
            'technology_id' => 12,
            'position'=> 1
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 3,
            'technology_id' => 13,
            'position'=> 2
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 3,
            'technology_id' => 7,
            'position'=> 3
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 3,
            'technology_id' => 9,
            'position'=> 4
        ]);

        DB::table('project_technologies')->insert([
            'project_id' => 3,
            'technology_id' => 14,
            'position'=> 5
        ]);


        //Contact
        DB::table('contact')->insert([
            'description' => 'Wanna drop me a message? Find me on any of the links below:',
            'include_form' => true
        ]);

        DB::table('contact_links')->insert([
            'name' => 'email',
            'link' => 'webb.christopher@live.co.uk'
        ]);

        DB::table('contact_links')->insert([
            'name' => 'facebook',
            'link' => 'chriswebbdeveloper'
        ]);

        DB::table('contact_links')->insert([
            'name' => 'twitter',
            'link' => 'ChrisWebbDev'
        ]);

        DB::table('contact_links')->insert([
            'name' => 'instagram',
            'link' => 'chriswebbdeveloper'
        ]);

        DB::table('contact_links')->insert([
            'name' => 'linkedin',
            'link' => 'christopher-dean-webb'
        ]);

        DB::table('contact_links')->insert([
            'name' => 'github',
            'link' => 'ChrisWebbDeveloper'
        ]);
    }
}
