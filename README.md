##Welcome to Wakanda##

An example with some more advanced component usage, will not be developed further, but was built with WAK8.

Notes:
Project/Index - the page with the login screen. admin/admin is the main access, but it's done through the directory.
Project/App - the page with the application base

On load of both the previous pages will redirect to the appropriate page based on session status.

app page contains a main menu bar that loads in a view or a special type of view called a list view. Relies on the name of the component.

Dashboard has a nested component with a sub navigation.

Contacts component is the most complete "list view"... see the listView component for the base, then there are two components loaded into a split container. Some interesting work in this component to set up a right anchored adjustable side bar.

At the app level is a people datasource - the list view and the detail page are able to take advantage of databinding between them automatically because I made a "person" global datasource in each of those sub components.

To see how to load the detail view, click the add button at the bottom of the contact list.

Like I said, this is half baked at best, but has some interesting ideas. I'll be posting a more polished component example later down the road.

Please visit [www.wakanda.org](http://www.wakanda.org "wakanda.org") for more information.
