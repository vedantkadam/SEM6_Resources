import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: 'Flutter Navigation',
    theme: ThemeData(
      // This is the theme of your application.
      primarySwatch: Colors.green,
    ),
    home: FirstRoute(),
  ));
}

class FirstRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: Drawer(
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.deepPurpleAccent,
              ),
              child: Text('Drawer Header'),
            ),
            ListTile(
              title: const Text('Go to page 2'),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => SecondRoute()),
                );
              },
            ),
            ListTile(
              title: const Text("Home,First Page"),
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => FirstRoute()),
                );
              },
            ),
          ],
        ),
      ),
      appBar: AppBar(
        title: Text('First Screen'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Tap Here'),
          color: Colors.green,
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondRoute()),
            );
          },
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Second Screen"),
      ),
      body: Center(
        child: RaisedButton(
          color: Colors.green,
          onPressed: () {
            showDialog(
                context: context,
                builder: (BuildContext context) => new AlertDialog(
                      backgroundColor: Colors.lightBlueAccent,
                      actions: <Widget>[
                        new IconButton(
                            icon: new Icon(Icons.close),
                            onPressed: () {
                              Navigator.pop(context);
                            })
                      ],
                      title: new Text('Notice'),
                      content: new Text('This button is tapped '),
                    ));
            ;
          },
          child: Text('TAP here'),
        ),
      ),
    );
  }
}
