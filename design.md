Overall Design Choices
------------------------------------------------------
We decided to place the area where the user could create a new task at the top of the page so that user would have
readily available access to the most basic function of a checklist - putting items on teh checklist. Next we placed two
tabs labeled "ALL" and "INCOMPLETE" where the user could sort the items on their checklist. "ALL" is intended to display
all checklist items whereas "INCOMPLETE" displays only incomplete checklist items. The next major design decision we
made was to have an edit and delete button on every checklist item line. We felt these buttons were important as they 
allowed the user to edit and delete specific line items. Lastly at the bottom we placed "Delete Completed" and "Delete 
All" buttons. We chose these two buttons as we thought a user would either want to clean up their list by deleting the 
completed items or start a completely new list in which case they would want to delete all.

Some alternative designs we considered were different labels of components and different designs of buttons. We ended
up going with our final design due to other hurdles we encountered while building this checklist. 

We did not do any outright user testing, but we did consider our own relationship with this checklist and what we might 
want out of the design.

The flow of the app can be seen through completing the tasks below.

One specific challenge we faced is with flexbox and gridbox design. We intitially tried to create one gridbox that dealt
with the outer table and the structuring on each line all in one gridbox. We were having trouble controlling grandchild
elements and eventually came to the realization that gridbox/flexbox can only control direct children. We then changed 
the structure to a gridbox where on every line that contained a checklist item was its own flexbox. By breaking up what 
various parents had to do we were able to achieve the desired design.

Task 1
------------------------------------------------------
Start:
Requires task1_start_intermediate.html and style.css
![Task 1 Start](Screenshots/task1_start.png)
Intermediate:
Requires task1_start_intermediate.html and style.css
![Task 1 Intermediate Part 1](Screenshots/task1_intermediate.png)
![Task 1 Intermediate Part 2](Screenshots/task1_intermediate_p2.png)
End:
Requires task1_end.html and style.css
![Task 1 End](Screenshots/task1_end.png)

Task 2
------------------------------------------------------
Start:
Requires task2_start_intermediate.html and style.css
![Task 1 Start](Screenshots/task2_start.png)
Intermediate:
Requires task2_start_intermediate.html and style.css
![Task 1 Intermediate Part 1](Screenshots/task2_intermediate.png)
![Task 1 Intermediate Part 2](Screenshots/task2_intermediate_p2.png)
End:
Requires task2_end.html and style.css
![Task 1 End](Screenshots/task2_end.png)

Task 3
------------------------------------------------------
Start:
Requires task3_alltab_start_intermediate_end.html and style.css
![Task 1 Start](Screenshots/task3_start.png)
Intermediate:
Requires task3_alltab_start_intermediate_end.html and style.css
![Task 1 Intermediate](Screenshots/task3_intermediate.png)
End:
For the end screen, follow comments on coloring tabs in CSS file (blue is the tab you are one and red is the other tab).
<br>
Also, the strikethrough requires an uncomment of a line in the CSS file under #checkcheck3
Requires task3_alltab_start_intermediate_end.html and style.css
![Task 1 End (All Tab)](Screenshots/task3_end_all_tab.png)
Requires task3_incompletetab_start_intermediate_end.html and style.css
![Task 1 End (Incomplete Tasks Tab)](Screenshots/task3_end_incomplete_tab.png)

Task 4
------------------------------------------------------
Start:
Requires task4_start.html and style.css
![](Screenshots/task4_start.png)
Intermediate:
Requires task4_start.html, style.css, and clicking on the edit button.
![](Screenshots/task4_intermediate.png)
Requires task4_intermediate.html, style.css, and the user typing in the renamed title.
![](Screenshots/task4_intermediate_p2.png)
End:
Requires task4_end.html and style.css
![](Screenshots/task4_end.png)

Task 5
------------------------------------------------------
Start:
Requires task5,6_start_intermediate.html, style.css, along with a manual checking of the "Eat Lunch" task. 
![](Screenshots/task5_start.png)
Intermediate:
Requires task5,6_start_intermediate.html, style.css, clicking on the incomplete tab, and manual check of "Eat Lunch".
![](Screenshots/task5_intermediate.png)
End:
Requires task5,6_end.html, style.css, and the uncommenting of light blue as the background color for "incomplete", 
light coral for "all"
![](Screenshots/task5_end.png)

Task 6
------------------------------------------------------
Start:
Requires task5,6_start_intermediate.html, style.css, and manual clicking of the "Eat Lunch" task checkbox.
![](Screenshots/task6_start.png)
Intermediate:
Requires task5,6_start_intermediate.html, style.css, manual clicking of "Eat Lunch" checkbox, and clicking on the 
"Delete Completed" button.
![](Screenshots/task6_intermediate.png)
End:
Requires task 5,6_end.html and style.css
![](Screenshots/task6_end.png)