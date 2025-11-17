//================================================================
// 1. بيانات الاختبار (Quiz Data)
//================================================================
const quizData = [
    {q:"Choose the correct sentence:", options:["She go to school every day.","She goes to school every day.","She going to school every day.","She gone to school every day."], correct:1},
    {q:"The word 'benevolent' most nearly means:", options:["kind","evil","angry","sad"], correct:0},
    {q:"Which sentence is in past tense?", options:["I eat breakfast now.","I ate breakfast yesterday.","I am eating breakfast.","I will eat breakfast."], correct:1},
    {q:"Choose the correct preposition: He is interested ___ learning English.", options:["in","on","at","for"], correct:0},
    {q:"Complete the sentence: If it rains tomorrow, we ___ at home.", options:["will stay","stay","stayed","staying"], correct:0},
    {q:"Choose the synonym of 'difficult':", options:["easy","hard","light","soft"], correct:1},
    {q:"Which is a formal way to greet someone in writing?", options:["Hey!","Dear Sir/Madam","Yo!","Hi there"], correct:1},
    {q:"Read the text: 'John has three sisters. Two of them are doctors.' Question: How many sisters does John have?", options:["1","2","3","4"], correct:2},
    {q:"The opposite of 'increase' is:", options:["grow","expand","decrease","rise"], correct:2},
    {q:"Choose the correct sentence:", options:["He don't like coffee.","He doesn't like coffee.","He not likes coffee.","He no like coffee."], correct:1},
    {q:"Choose the correct form: I ___ to the gym every week.", options:["go","goes","going","gone"], correct:0},
    {q:"Synonym of 'important':", options:["trivial","essential","minor","unnecessary"], correct:1},
    {q:"Past tense of 'run' is:", options:["runned","ran","run","running"], correct:1},
    {q:"Choose the correct article: I saw ___ elephant.", options:["a","an","the","no article"], correct:1},
    {q:"Opposite of 'cheap':", options:["expensive","affordable","low","moderate"], correct:0},
    {q:"Which sentence is correct?", options:["She don't like apples.","She doesn't like apples.","She not like apples.","She no likes apples."], correct:1},
    {q:"The word 'abundant' most nearly means:", options:["scarce","plentiful","few","little"], correct:1},
    {q:"Choose the correct preposition: He is good ___ math.", options:["at","in","on","for"], correct:0},
    {q:"Which is a verb?", options:["run","blue","happy","book"], correct:0},
    {q:"Choose the correct pronoun: ___ am very tired.", options:["He","She","I","They"], correct:2},
    {q:"Opposite of 'increase':", options:["decrease","grow","rise","expand"], correct:0},
    {q:"Which sentence is past perfect?", options:["I had finished my homework before dinner.","I finished my homework.","I am finishing my homework.","I will finish my homework."], correct:0},
    {q:"Choose the correct sentence:", options:["They has gone to school.","They have gone to school.","They gone to school.","They had gone school."], correct:1},
    {q:"Synonym of 'happy':", options:["sad","joyful","angry","tired"], correct:1},
    {q:"Complete: I will call you when I ___ home.", options:["arrive","arrives","arrived","arriving"], correct:0},
    {q:"Which is correct?", options:["I didn't went to school.","I didn't go to school.","I didn't gone to school.","I didn't going to school."], correct:1},
    {q:"Choose the opposite of 'early':", options:["late","soon","now","before"], correct:0},
    {q:"The word 'rapid' means:", options:["slow","quick","fast","lazy"], correct:2},
    {q:"Choose the correct sentence:", options:["He can sings well.","He can sing well.","He can sang well.","He can singing well."], correct:1},
    {q:"Past tense of 'buy' is:", options:["buyed","bought","buy","buied"], correct:1}
];

//================================================================
// 2. دالة عرض الأسئلة
//================================================================
const questionsContainer = document.getElementById('questions');
quizData.forEach((qData, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<p>${index+1}. ${qData.q}</p>` +
      qData.options.map((opt,i)=>`<label><input type='radio' name='q${index}' value='${i}'> ${opt}</label><br>`).join('');
    questionsContainer.appendChild(div);
});

// دالة لإظهار الاختبار وإخفاء زر البدء
function showQuiz() {
    document.querySelector('.quiz').style.display = 'block';
    document.querySelector('.start-quiz-btn').style.display = 'none';
}


//================================================================
// 3. دالة احتساب النتيجة (Submit Quiz)
//================================================================
function submitQuiz(){
    let score = 0;
    quizData.forEach((qData,index)=>{
        const answer = document.querySelector(`input[name='q${index}']:checked`);
        if(answer && parseInt(answer.value) === qData.correct){ score++; }
    });

    const totalQuestions = quizData.length;
    const percent = Math.round(score / totalQuestions * 100);

    // تحديد المستوى حسب CEFR
    let level = "";
    if(percent <= 33) level = "A1 (مبتدئ جدًا)";
    else if(percent <= 50) level = "A2 (مبتدئ)";
    else if(percent <= 73) level = "B1 (متوسط)";
    else if(percent <= 90) level = "B2 (متقدم متوسط)";
    else level = "C1 (متقدم)";

    document.getElementById('result').innerHTML = `
      <strong>نتيجتك:</strong> ${score} من ${totalQuestions} (${percent}%) <br>
      <strong>المستوى الموصى به للدراسة:</strong> <span style="color: ${percent > 70 ? 'darkgreen' : 'darkred'}">${level}</span>
    `;
}
