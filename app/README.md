This app demonstrates the following Angular2 capabilities:

- Passing data from a parent component to a child component
  (for example, from SettingsComponent to CheckBoxComponent, and from
  ArticlesComponent to CheckboxComponent)
- Embedding parent component html in child component html ('transclusion')
- Accessing data via http request (in this case, articles from SolveBio public API)
- Basic URL routing

To run locally:
1. clone the repository from https://github.com/sjstone2838/checkbox.git 
2. make sure all dependencies are installed by running "npm install"
3. run "npm start"

Angular2 transpilation generates a lot of *.js and *.map files, which can be an eye-sore. 
Use the file 'checkbox.sublime-project' to hide transpiled files in Sublime