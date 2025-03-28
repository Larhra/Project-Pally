import 'package:flutter/material.dart';
import '../widgets/custom_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Replace this with your actual UI implementation
    return Scaffold(
      appBar: AppBar(
        title: const Text('My App'),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Replace these with your actual UI components
            const Text(
              'Welcome Back!',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 20),
            // Example of using a custom widget
            const CustomCard(
              title: 'Feature 1',
              description: 'This is a description of feature 1',
              icon: Icons.star,
            ),
            const SizedBox(height: 16),
            const CustomCard(
              title: 'Feature 2',
              description: 'This is a description of feature 2',
              icon: Icons.favorite,
            ),
          ],
        ),
      ),
    );
  }
}

