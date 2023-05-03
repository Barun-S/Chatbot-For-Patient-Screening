import React, { useState } from "react";
import axios from "axios";
import './addflow.css';
const API_URL = "http://localhost:5001/addflowapi";

function QuestionForm() {
    const [topic, setTopic] = useState("");
    const [questions, setQuestions] = useState([{ question: "", nestedQuestions: [] }]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post(API_URL, {
        topic,
        questions,
      });
      console.log(response.data);
    };
  
    const handleTopicChange = (e) => {
      setTopic(e.target.value);
    };
  
    const handleQuestionChange = (index, e) => {
      const { name, value } = e.target;
      const list = [...questions];
      list[index][name] = value;
      setQuestions(list);
    };
  
    const handleNestedQuestionChange = (questionIndex, nestedIndex, e) => {
      const { name, value } = e.target;
      const list = [...questions];
      list[questionIndex]["nestedQuestions"][nestedIndex][name] = value;
      setQuestions(list);
    };
  
    const handleAddQuestion = () => {
      setQuestions([...questions, { question: "", nestedQuestions: [] }]);
    };
  
    const handleAddNestedQuestion = (questionIndex) => {
      const list = [...questions];
      list[questionIndex]["nestedQuestions"].push({ condition: "", nestedQuestion: "" });
      setQuestions(list);
    };
  
    return (
      <div className="QuestionForm">
        <div className="heading"> 
          Fill the Form to Add New Symptoms
        </div>
        <form onSubmit={handleSubmit}>
          <div className="topic">
            <input type="text" name="topic" placeholder="Enter Symptom" value={topic} onChange={handleTopicChange} />
          </div>
          {questions.map((question, questionIndex) => (
            <div className="question" key={questionIndex}>
              <input
                type="text"
                name="question"
                placeholder="Enter Question"
                value={question.question}
                onChange={(e) => handleQuestionChange(questionIndex, e)}
              />
              {question.nestedQuestions.map((nestedQuestion, nestedIndex) => (
                <div className="nested-question" key={nestedIndex}>
                  <input
                    type="text"
                    name="condition"
                    placeholder="Enter Condition"
                    value={nestedQuestion.condition}
                    onChange={(e) => handleNestedQuestionChange(questionIndex, nestedIndex, e)}
                  />
                 <p></p>   
                  <input
                    type="text"
                    name="nestedQuestion"
                    placeholder="Enter Condition Question"
                    value={nestedQuestion.nestedQuestion}
                    onChange={(e) => handleNestedQuestionChange(questionIndex, nestedIndex, e)}
                  />
                </div>
              ))}
              <button type="button" onClick={() => handleAddNestedQuestion(questionIndex)}>
                Add Nested Question
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddQuestion}>
            Add New Question
          </button>
          <br/>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    );
  }
  
  export default QuestionForm;