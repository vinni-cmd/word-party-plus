![word party logo](./src/assets/favicon.png)

Word Party

Project description
An app to help find inspiration for expanding vocabulary through multiple categories.

Uses the Datamuse API (https://www.datamuse.com/api/) and Firebase.
Users can enter a word and then select what functionality they would like performed on that word. 
  ie: find rhymes for that word, or find words similar to it.
The app will then call the Datamuse API to perform the specified search. API loading states while waiting.
Results are displayed in a visually pleasing manner and then the user will be presented with the ability to search again with a new word. Users are able to view the collection of words on the saved words page.

Error handling:
If a user types in a query that yields no result - they are provided feedback (e.g. there were no results found).
Common error responses should be handled.

Allow users to edit and/or remove words from their collection.

https://wordparty.netlify.app/

Style Guide

Colour Palette:
#78CAD2
#23395B
#EAE5E9

Typography

Headings: Josefin Sans (semibold)
Heading Text
Body font: Lato (light)
