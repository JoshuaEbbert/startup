import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

export function About() {
  return (
    <main className="about">
        <div class="p-5 text-center bg-body-tertiary rounded-3">
            <img alt="Test prep books" src="background.jpeg" class="center-image"/>
            <h1 class="text-body-emphasis m-5">Embrace Efficiency Over Exertion</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted">
                TestPrep StrateGPT is a chat application that uses the GPT-3 model to help students prepare for college entrance exams. 
                It is designed to help students study for exams by providing them with a chatbot that can answer questions and provide explanations for difficult concepts.
                The chatbot is trained on a wide range of topics and can provide detailed explanations for a variety of subjects, including math, science, history, and more. 
                TestPrep StrateGPT is a powerful tool for students who want to improve their test scores and succeed in their academic pursuits.
            </p>
        </div>
    </main>
  );
}