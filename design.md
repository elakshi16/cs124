Design Choices Discussion
------------------------------------------------------
**Our Design Decisions** <br>
We made a number of significant design changes from Lab 1, as our design did not work particularly well for a smaller
interfaces. In this vein, we increased the size on all of our text, and made the various items on our app larger. This
resulted in the App being readable on a smaller screen. We also decided to make the colors present in the styling more
consistent with each other so it would be less harsh visually.

For functionality, the major change we made was getting rid of a tabular setup where the user could switch tabs between
an all tasks tab and an incomplete tasks tab. Instead, we replaced this with a button where the user could click between
showing all tasks and showing incomplete tasks. This was largely due to our ability to more easily implement buttons,
but we also thought buttons would be better for usability.

Another functional change we made was getting rid of the edit button. This was entirely due to implementation and
restrictions on time. We spent awhile trying to implement the edit button, but we ran into issues with getting other
components to work. Thus, we used an editable field that allows the user to click and edit the field.

Several design elements were maintained from previous iterations. We kept creating a new task at the top of the
page so that user could access the most essential item of teh checklist - putting items on the checklist. We maintained
the delete button that allows users to get rid of checklist items once they are on the list. And lastly we kept the
Delete All button at the bottom of the app, because we found it worked well for its intended use.
<br>
<br>

**Alternative Designs** <br>





**User Testing** <br>
The user testing went well, the user was able to accomplish all the tasks we set out for them. The one issue they had 
was with finding the checkbox. After looking at the App we realized we did not implement the color backgrounds for each 
individual task. We then proceeded to implement this feature.

Final Design Images
------------------------------------------------------



Reflection
------------------------------------------------------
**Challenges**<br>
One specific challenge we faced is with flexbox and gridbox design. We intitially tried to create one gridbox that dealt
with the outer table (everything other than the create new task bar) and adding each new task as a row in the gridbox. We were having trouble controlling grandchild
elements and eventually came to the realization that gridbox/flexbox can only control direct children (with the guidance of Prof. Rhodes). We then changed
the structure to a gridbox where every line that contained a checklist item was its own flexbox. By breaking up what
various parents had to do, we were able to achieve the desired design.
<br>
<br>
**What We Are Most Proud Of**<br>
One design choice that we are most proud of is giving the user a choice between an all tasks tab and an incomplete tasks
tab. While it may not seem as necessary when the list only contains three or four items, if the list builds up, it will
be very convenient to see what still needs to be completed at the click of a button.

