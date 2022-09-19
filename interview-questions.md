# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
My answer is a combination of my answer and what I gathered from the research I did by consulting with my Echo cohort mates. It is my understanding that a foreign key is link between data tables and in this particular situation, another model would be created in this Rails application and it would be the Student model. The foreign key would be on the Student model and it could be named student_id or cohort_id and it would link data between the Cohort model and the Student model.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: 
Get, post, put, delete, and patch are the RESTful routes that must be passed by params because the params allow for updates to the routes.

Researched answer: 
Upon consulting with my fellow developers in the cohort, I was made aware of "strong params." Show, update, destroy are the RESTful routes that would be passed with these params because they are used as a safety measure to manage the creation of new object instances and to keep unwanted info out of the database. Since no specific params were stated, I figured that I would just touch on both regular params and strong params.

3. Name three rails generator commands. What is created by each?

Your answer: Models, migrations, and controllers are three rails generator commands. Models creates a Ruby class that contains database records. Migrations create tools for changing database schemas. Controllers are the traffic directors for the views and models in the MVC.

Researched answer:

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
The controller method is students and the action is index - to display a list of all students.

action: "POST" location: /students
The controller method is students and the action is create - to create a new student.

action: "GET" location: /students/new
The controller method is students and the action is new - to return an HTML form for creating a new student.

action: "GET" location: /students/2
The controller method is students and the action is show - to display a specific student.

action: "GET" location: /students/2/edit
The controller method is students and the action is edit - to return an HTML form for editing a student.

action: "PATCH" location: /students/2
The controller method is students and the action is update - to update a specific student.

action: "DELETE" location: /students/2
The controller method is students and the action is destroy - to delete a specific student.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As Liz, I want multiple reminders with settings to customize reminder times.
- As Kim, I want to be able to categorize my to do list, so I can separate business or personal.
- As Ellen, I want a check off list, so I can see my completed tasks.
- As Fred, I want to be able to change the look of the list (color, font, etc), so I'm more motivated to do the task.
- As Thomas, I want it to be easy to edit my list, so I can modify on the fly.
- As Jason, I want to be able to share my list, so I can include other parties in the task.
- As Dennis, I want to connect my to do list with my calender, so I can be more organized.
- As Corey, I want email and text notifications, so I have additional reminders.
- As Aretha, I want to use pictures, so I can have more details of the task.
- As Tara, I want the app to work with Siri, so I can use voice commands. 
