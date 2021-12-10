Design Choices Discussion
------------------------------------------------------
**Our Design Decisions** <br>
The major design decisions for this lab mostly involved aria-labels and how best to communicate our intent to users who 
accessed our site via voiceOver. We had to make a decision as to how to label priority buttons so that they were read as 
we intended (checkboxes instead of buttons), which involved ternary operators that toggled between true and false.

Another major design decision was to flip the priority buttons to a vertical setup when the screen became narrower. This 
allowed us to maximize space and allows the user to see all of their options at once on a mobile device. 

We also placed a "dummy" Add List button outside of what is considered a list of tasks because the concept of adding a
list should be separate from what happens within a single list.
<br>
<br>

**Alternative Designs** <br>
Alternative designs that were discussed included having a broken priority list. This did not end up working out, as it 
was unclear to the user which buttons specified which priority.
<br>
<br>

**User Testing** <br>
We did not have any additional user testing for this lab.

Final Design Images
------------------------------------------------------

**The only major design change from these design images is that the priority button moved to align right and there is an
added Add List button at the bottom of the screen (centered, below Delete All button).

This is the opening image of the app. The user can now proceed to insert a new task in the text box and press the '+'
button to add the task to their checklist. The user may press any of the other buttons at this point if they so like, but
they will not do anything.

![](Screenshots/openApp.png)

-----

Once a user inserts a task the app will look like the following.

![](Screenshots/oneTask.png)

----

The user can then set the priority for the task by clicking one of the three buttons on the task line.

![](Screenshots/oneTask_priority.png)

----

The user then has the option to add more tasks or work with just the single task in the checklist. The following example 
is what the app will look like if the user adds more tasks.

![](Screenshots/moreTasks.png)

----

Once tasks are complete the user can click on the checkbox and mark a task as complete.

![](Screenshots/someChecked.png)

----

At this point, if the user wants to make their checklist easier to read but don't want to delete their completed items 
just yet, they can hide complete tasks by clicking the corresponding button, and they will end up with a screen similar 
to the one below.

![](Screenshots/hideCompleted.png)

----

The user can then work with the checklist at this point or press the show all tasks button to return to the view shown 
in the previous screenshot.

If the user wishes to delete a specific task, they can simply press the delete button and the task will be deleted.

![](Screenshots/deleteTask.png)

----

Lastly, if the user wishes to clear their tasks they can press the delete all button and return to back to the opening 
view of the App.

![](Screenshots/allChecked.png)

![](Screenshots/openApp.png)
<br><br>

Reflection
------------------------------------------------------
**Challenges**<br>
We had several challenges during this lab. We ran into issues with resizing textboxes and grouping elements so that the 
site would be able to correctly respond to dimension changes. 

The challenge that we failed to overcome is in implementing Add List. The main issue was with managing the firestore database
such that the top layer would be lists and each list would contain tasks. We struggled to implement the code to demonstrate
the hierarchies we wanted. We were also unsure on how to manage state across components.
<br>
<br>
**What We Are Most Proud Of**<br>
We are most proud of the fact that VoiceOver works well with the way we formatted our app. VoiceOver is able to use both 
the original labels, and our supplemented labels to help the user have a good idea of what is going on through an audio 
medium.