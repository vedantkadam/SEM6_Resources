import 'package:flutter/material.dart';

void main() {
  var column = Column(
    children: [],
  );
  runApp(MaterialApp(
    home: Scaffold(
      appBar: AppBar(
        title: Text(
          'My First App',
          style: TextStyle(
            fontSize: 30.0,
            fontWeight: FontWeight.bold,
            color: Colors.red,
            fontFamily: 'IndieFlower',
          ),
        ),
        centerTitle: true,
        backgroundColor: Colors.yellowAccent,
      ),
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(150),
          child: Column(children: [
            Card(
              child: Container(
                height: 100,
                width: 300,
                margin: const EdgeInsets.all(3),
                color: Colors.red[600],
                child: Padding(
                  padding: EdgeInsets.fromLTRB(120, 30, 40, 20),
                  child: Text(
                    "Box 1",
                    style: TextStyle(
                      color: Colors.blue[900],
                      fontSize: 30,
                      fontFamily: 'IndieFlower',
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ),
            Divider(
              height: 20,
              thickness: 2,
              indent: 350,
              endIndent: 350,
              color: Colors.white,
            ),
            Card(
              child: Container(
                height: 100,
                width: 300,
                margin: const EdgeInsets.all(3),
                color: Colors.purple,
                child: Padding(
                  padding: EdgeInsets.fromLTRB(120, 30, 40, 20),
                  child: Text(
                    "Box 2",
                    style: TextStyle(
                      color: Colors.blue[900],
                      fontSize: 30,
                      fontFamily: 'IndieFlower',
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
              ),
            ),
          ]),
        ),
      ),
      backgroundColor: Colors.black,
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: Text('Close'),
        backgroundColor: Colors.red[600],
        hoverColor: Colors.blue[800],
      ),
    ),
  ));
}
