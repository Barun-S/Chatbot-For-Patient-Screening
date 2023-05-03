import nltk 
nltk.download('wordnet')


{'topic': 'Symptom1', 
'questions': [{'question': 'Q1', 'answer': 'A1', 'nestedQuestions': [{'question': 'NQ1', 'answer': 'NA1'}]}, 
{'question': 'Q2', 'answer': 'A2', 'nestedQuestions': []}, {'question': 'Q3', 'answer': 'A3', 'nestedQuestions': []}]}



{
    "symptom": "symptom",
    "questions": [
        {
        "ques" : "question1",
        "condition":{
            "yes":["Nested question 1","Nested question 2" 
            ],
            
            "no":["NQ3"
            ],
        }
        }
    ]
}

{'topic': 'Symptom1', 
    'questions': [
        {
        'ques': '1', 
        'condition': {
            'yes': ['NQ1'], 
            'no': ['NQ2']
            }
            }, {'ques': 'Q2', 
            'condition': {}}, {'ques': 'Q3', 'condition': {}}, {'ques': 'sd', 'condition': {}}]}