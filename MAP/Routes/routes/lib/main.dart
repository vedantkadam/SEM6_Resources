import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';

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
      appBar: AppBar(
        title: Text('First Screen'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Click Here'),
          color: Colors.orangeAccent,
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
          color: Colors.blueGrey,
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => ThirdRoute()),
            );
          },
          child: Text('Go to gestures screen'),
        ),
      ),
    );
  }
}

class ThirdRoute extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Gestures'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('Go to first screen'),
          color: Colors.orangeAccent,
          // onPressed: () {
          //   Navigator.push(
          //     context,
          //     MaterialPageRoute(builder: (context) => FirstRoute()),
          //   );
            onTap:
            () {
              const snackBar = SnackBar(content: Text('Tap'));

              ScaffoldMessenger.of(context).showSnackBar(snackBar);
            };
          },
        ),
      ),
    );
  }
}
