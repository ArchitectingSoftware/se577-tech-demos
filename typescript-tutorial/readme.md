# Objective

The goal of this demo is to give you some background into typescript.  We will be seeing it a good bit in this class.  If you are familiar with Java or Javascript this will be a pretty easy thing for you to learn

# Materials
We will be looking at an existing online typescript tutorial that can be found here: https://github.com/dinanathsj29/typescript-tutorial

Some other good information on learning typescript can be found here: https://www.typescripttutorial.net/

A great video tutorial is here:  https://www.youtube.com/watch?v=BwuLxPH8IDs

# What you need to install

The following tools will need to be installed:

1. Typescript is based on node.js, you will need to install that from a package manager such as homebrew for the mac or via the website: https://nodejs.org/en/

2. Node comes with a tool called `npm`, this tool can be used to install and manage dependencies, i will be using a slightly better one called yarn.  You can install it using information here: https://yarnpkg.com/

3. I will be using and recommend Microsoft VSCode as my editor and IDE.  You can use whatever you want.  VSCode installation can be found here:  https://code.visualstudio.com/

Now that the basics are installed, to get ready for using typescript, add both `tsc`, the Typescript Compiler, and `ts-node` to your command line, which can run typescript directly for debugging purposes.  Im also going to be installing a tool called `nodemon` that is helpful for demonstrating typescript interactively.  These commands will do this for you:

```
yarn global add typescript
yarn global add ts-node
yarn global add nodemon
```

Check your installation as follows by entering the following commands
```
$ tsc --version
Version 4.6.3

$ ts-node --version
v10.7.0
```
Note that if you get different version numbers that is OK!

#### Now its time to code

Quick lay of the land...

1. Create a typescript file, it can have any name, just make sure it ends with the `.ts` extension
   
2. From a command prompt type `nodemon 
your-typescript-file-name.ts`.  Notice how everytime you save the file that `nodemon` will pick up the changes and rerun your code.  You can also accomplish the same goal without automatic watching by executing `ts-node your-typescript-file-name.ts`.  This command will run your code once.

3. If you want to compile your typescript into javascript you can do this by running `tsc your-typescript-file-name.ts` and the compiler will produce a corresponding javascript file named `your-typescript-file-name.js`.  You can run this directly with node via `node your-typescript-file-name.js`

