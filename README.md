h2. Setup

# When building in MITRE, be sure to create a `$HOME/.typingsrc` file containing (_NOTE, on windows its `%USERPROFILE%/.typingsrc`_):
```
proxy=http://gatekeeper-w.mitre.org:80
rejectUnauthorized=false

```

h2. Running

# To run:
```
mvn tomcat7:run
```

# To run, and watch for changes to files:
```
mvn tomcat7:run -P watcher
```
## Be sure to use a powershell or cmd window.  If you run with cygwin, it will work, but will leave behind _zombie_ node processes.

