import React, { useState } from 'react';

 const KoreanLevel1Test = () => {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [answers, setAnswers] = useState({});
  const [showTest, setShowTest] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [vocabScore, setVocabScore] = useState(0);
  const [grammarScore, setGrammarScore] = useState(0);
  const [understandScore, setUnderstandScore] = useState(0);
  const currentDate = '2025.08.25';

  const questions = [
    // Vocabulary Questions (1-10)
    { id: 1, section: 'vocabulary', type: 'multiple', korean: '가: 이 가방이 크다고 생각해요?\n나: 아니요, 가방이 ( ).', options: ['① 작습니다', '② 큽니다', '③ 좋습니다', '④ 나쁩니다'], correct: '1' },
    { id: 2, section: 'vocabulary', type: 'multiple', korean: '가: 오늘 날씨가 덥네요.\n나: 네, 어제는 ( ).', options: ['① 더웠어요', '② 추웠어요', '③ 좋았어요', '④ 싫었어요'], correct: '2' },
    { id: 3, section: 'vocabulary', type: 'multiple', korean: '가: 영화가 재미있었어요?\n나: 아니요, ( ).', options: ['① 재미없었어요', '② 좋았어요', '③ 길었어요', '④ 짧았어요'], correct: '1' },
    { id: 4, section: 'vocabulary', type: 'multiple', korean: '가: 이 음식이 싸요?\n나: 아니요, ( ).', options: ['① 저렴해요', '② 비싸요', '③ 맛있어요', '④ 달아요'], correct: '2' },
    { id: 5, section: 'vocabulary', type: 'multiple', korean: '가: 학교가 집에서 멀어요?\n나: 아니요, ( ).', options: ['① 가까워요', '② 좋아요', '③ 커요', '④ 예뻐요'], correct: '1' },
    { id: 6, section: 'vocabulary', type: 'multiple', korean: '가: 이 방이 밝아요.\n나: 네, 저 방은 ( ).', options: ['① 어두워요', '② 밝아요', '③ 깨끗해요', '④ 넓어요'], correct: '1' },
    { id: 7, section: 'vocabulary', type: 'multiple', korean: '가: 오빠가 키가 커요?\n나: 아니요, ( ).', options: ['① 키가 작아요', '② 키가 커요', '③ 잘생겼어요', '④ 친절해요'], correct: '1' },
    { id: 8, section: 'vocabulary', type: 'multiple', korean: '가: 이 커피가 뜨거워요.\n나: 그럼 저 커피는 ( )?', options: ['① 차가워요', '② 뜨거워요', '③ 달아요', '④ 써요'], correct: '1' },
    { id: 9, section: 'vocabulary', type: 'multiple', korean: '가: 아침에 일찍 일어나요?\n나: 아니요, ( ) 일어나요.', options: ['① 늦게', '② 빨리', '③ 자주', '④ 가끔'], correct: '1' },
    { id: 10, section: 'vocabulary', type: 'multiple', korean: '가: 이 길이 복잡해요?\n나: 아니요, ( ).', options: ['① 조용해요', '② 시끄러워요', '③ 깨끗해요', '④ 더러워요'], correct: '1' },

    // Grammar Questions (11-20)
    { id: 11, section: 'grammar', type: 'mark', korean: '저는 (학생 / 이에요 / 입니다).', options: ['① 학생입니다', '② 학생이에요', '③ 학생해요', '④ 학생있어요'], correct: '①' },
    { id: 12, section: 'grammar', type: 'mark', korean: '친구 (가 / 이 / 을) 만나요.', options: ['① 친구가', '② 친구를', '③ 친구에', '④ 친구로'], correct: '②' },
    { id: 13, section: 'grammar', type: 'mark', korean: '도서관 (에서 / 에 / 로) 공부해요.', options: ['① 도서관에서', '② 도서관에', '③ 도서관을', '④ 도서관이'], correct: '①' },
    { id: 14, section: 'grammar', type: 'mark', korean: '이것 (은 / 는 / 을) 뭐예요?', options: ['① 이것은', '② 이것을', '③ 이것에', '④ 이것이'], correct: '①' },
    { id: 15, section: 'grammar', type: 'mark', korean: '집 (에 / 에서 / 로) 가요.', options: ['① 집에', '② 집에서', '③ 집을', '④ 집으로'], correct: '①' },
    { id: 16, section: 'grammar', type: 'multiple', korean: '저는 ( )을 먹어요.', options: ['① 책', '② 사과', '③ 펜', '④ 가방'], correct: '2' },
    { id: 17, section: 'grammar', type: 'multiple', korean: '학교에 ( ) 가요.', options: ['① 버스로', '② 친구와', '③ 공부하러', '④ 책을'], correct: '2' },
    { id: 18, section: 'grammar', type: 'multiple', korean: '이것은 ( )입니다.', options: ['① 물', '② 선생님', '③ 책상', '④ 꽃'], correct: '3' },
    { id: 19, section: 'grammar', type: 'multiple', korean: '저는 ( )에 삽니다.', options: ['① 학교', '② 서울', '③ 책', '④ 친구'], correct: '2' },
    { id: 20, section: 'grammar', type: 'multiple', korean: '( )이/가 좋아요?', options: ['① 음악', '② 집', '③ 물', '④ 가방'], correct: '1' },

    // Understanding Questions (21-40)
    { id: 21, section: 'understanding', type: 'multiple', korean: '가: 안녕하세요!\n나: ( )', options: ['① 안녕하세요!', '② 안녕히 가세요!', '③ 고맙습니다!', '④ 죄송합니다!'], correct: '1' },
    { id: 22, section: 'understanding', type: 'multiple', korean: '가: 이름이 뭐예요?\n나: ( )', options: ['① 네, 맞아요', '② 저는 김철수예요', '③ 한국 사람이에요', '④ 20살이에요'], correct: '2' },
    { id: 23, section: 'understanding', type: 'multiple', korean: '가: 지금 몇 시예요?\n나: ( )', options: ['① 2월이에요', '② 월요일이에요', '③ 3시예요', '④ 한국이에요'], correct: '3' },
    { id: 24, section: 'understanding', type: 'multiple', korean: '가: 어디에서 왔어요?\n나: ( )', options: ['① 학교에 가요', '② 중국에서 왔어요', '③ 한국어를 공부해요', '④ 책을 읽어요'], correct: '2' },
    { id: 25, section: 'understanding', type: 'multiple', korean: '가: 뭘 드시겠어요?\n나: ( )', options: ['① 네, 있어요', '② 아니요, 괜찮아요', '③ 커피 주세요', '④ 감사합니다'], correct: '3' },
    { id: 26, section: 'understanding', type: 'multiple', korean: '가: 어디에 살아요?\n나: ( )', options: ['① 서울에 살아요', '② 책이에요', '③ 학교에요', '④ 친구예요'], correct: '1' },
    { id: 27, section: 'understanding', type: 'multiple', korean: '가: 뭐하세요?\n나: ( )', options: ['① 공부해요', '② 집에요', '③ 물이에요', '④ 가방이에요'], correct: '1' },
    { id: 28, section: 'understanding', type: 'multiple', korean: '가: 몇 살이에요?\n나: ( )', options: ['① 25살이에요', '② 책이에요', '③ 집이에요', '④ 학교예요'], correct: '1' },
    { id: 29, section: 'understanding', type: 'multiple', korean: '가: 맛있어요?\n나: ( )', options: ['① 네, 맛있어요', '② 아니요, 좋아요', '③ 책이에요', '④ 집이에요'], correct: '1' },
    { id: 30, section: 'understanding', type: 'multiple', korean: '가: 언제 가요?\n나: ( )', options: ['① 내일 가요', '② 책이에요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 31, section: 'understanding', type: 'multiple', korean: '가: 누구예요?\n나: ( )', options: ['① 저는 학생이에요', '② 책이에요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 32, section: 'understanding', type: 'multiple', korean: '가: 어디 가요?\n나: ( )', options: ['① 학교에 가요', '② 책을 읽어요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 33, section: 'understanding', type: 'multiple', korean: '가: 뭐가 좋아요?\n나: ( )', options: ['① 음악이 좋아요', '② 책이에요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 34, section: 'understanding', type: 'multiple', korean: '가: 언제 만날까요?\n나: ( )', options: ['① 내일 만날게요', '② 책이에요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 35, section: 'understanding', type: 'multiple', korean: '가: 어디서 공부해요?\n나: ( )', options: ['① 도서관에서 공부해요', '② 집에서', '③ 학교에서', '④ 책에서'], correct: '1' },
    { id: 36, section: 'understanding', type: 'multiple', korean: '가: 뭐 먹어요?\n나: ( )', options: ['① 김치를 먹어요', '② 책이에요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 37, section: 'understanding', type: 'multiple', korean: '가: 어디서 일해요?\n나: ( )', options: ['① 회사에서 일해요', '② 집에서', '③ 학교에서', '④ 책에서'], correct: '1' },
    { id: 38, section: 'understanding', type: 'multiple', korean: '가: 뭐 사요?\n나: ( )', options: ['① 사과를 사요', '② 책을 사요', '③ 집을 사요', '④ 물을 사요'], correct: '1' },
    { id: 39, section: 'understanding', type: 'multiple', korean: '가: 언제 오세요?\n나: ( )', options: ['① 5시에 와요', '② 책이에요', '③ 집이에요', '④ 물이에요'], correct: '1' },
    { id: 40, section: 'understanding', type: 'multiple', korean: '가: 누구와 가요?\n나: ( )', options: ['① 친구와 가요', '② 책과 가요', '③ 집과 가요', '④ 물과 가요'], correct: '1' },
  ];

  const handleStart = () => {
    if (name && nationality && birthYear) setShowTest(true);
  };

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  const submitTest = () => {
    let vocabCount = 0, grammarCount = 0, understandCount = 0;
    let vocabTotal = 0, grammarTotal = 0, understandTotal = 0;

    questions.forEach(q => {
      if (q.section === 'vocabulary') {
        vocabTotal++;
        if (answers[q.id] === q.correct) vocabCount++;
      }
      if (q.section === 'grammar') {
        grammarTotal++;
        if (answers[q.id] === q.correct) grammarCount++;
      }
      if (q.section === 'understanding') {
        understandTotal++;
        if (answers[q.id] === q.correct) understandCount++;
      }
    });

    const vScore = Math.round((vocabCount / vocabTotal) * 44);
    const gScore = Math.round((grammarCount / grammarTotal) * 56);
    const uScore = Math.round((understandCount / understandTotal) * 100);
    const totalScore = Math.round(((vocabCount + grammarCount + understandCount) / questions.length) * 100);

    setVocabScore(vScore);
    setGrammarScore(gScore);
    setUnderstandScore(uScore);
    setScore(totalScore);
    setShowResults(true);
  };

  const getSectionTitle = (questionId) => {
    if (questionId >= 1 && questionId <= 10) {
      return '(1-10) 밑줄 친 부분과 반대되는 뜻을 가진 것을 고르십시오.\nChoose the word that has the opposite meaning to the underlined part.';
    } else if (questionId >= 11 && questionId <= 15) {
      return '(11-15) 알맞은 것에 O 하십시오.\nMark O for the right one.';
    } else if (questionId >= 16 && questionId <= 40) {
      return '(16-40) 가장 알맞은 답을 고르십시오.\nChoose the most appropriate answer.';
    }
    return '';
  };

  const formatQuestionText = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index} className={line.startsWith('가:') || line.startsWith('나:') ? 'text-blue-700 font-medium' : ''}>
        {line}
      </div>
    ));
  };

  if (!showTest) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-2xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8 pb-6 border-b-2 border-blue-600">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">한국어 능력 평가 시험 (Level 1)</h1>
              <p className="text-sm text-gray-600 mb-1">Korean Proficiency Test - Beginner Level</p>
              <p className="text-sm text-gray-500">امتحان تحديد مستوى اللغة الكورية - المستوى الأول</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-700">
              <strong>지시사항 (Instructions / التعليمات):</strong><br/>
              • 각 문제에서 가장 적절한 답을 선택하세요.<br/>
              • Choose the most appropriate answer for each question.<br/>
              • اختر الإجابة الأنسب لكل سؤال.
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name / الاسم:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nationality / الجنسية:</label>
                <input
                  type="text"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your nationality"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Year of birth / سنة الميلاد:</label>
                <input
                  type="number"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your birth year"
                  min="1900"
                  max="2010"
                />
              </div>
            </div>
            
            <button 
              onClick={handleStart} 
              disabled={!name || !nationality || !birthYear}
              className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              Start Test / ابدأ الاختبار
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const vocabPercentage = Math.round((vocabScore / 44) * 100);
    const grammarPercentage = Math.round((grammarScore / 56) * 100);
    const understandPercentage = Math.round((understandScore / 100) * 100);

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto p-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Header with Logo */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">세</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">online Korean test results</h1>
              </div>
            </div>

            {/* Main Results Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-sm font-medium">Name</th>
                    <th className="border border-gray-300 p-3 text-sm font-medium">Nationality</th>
                    <th className="border border-gray-300 p-3 text-sm font-medium">Year of birth</th>
                    <th className="border border-gray-300 p-3 text-sm font-medium">Date of exam</th>
                    <th className="border border-gray-300 p-3 text-sm font-medium">Test option</th>
                   
                    <th className="border border-gray-300 p-3 text-sm font-medium">Level Placement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-sm">{name}</td>
                    <td className="border border-gray-300 p-3 text-sm">{nationality}</td>
                    <td className="border border-gray-300 p-3 text-sm">{birthYear}</td>
                    <td className="border border-gray-300 p-3 text-sm">{currentDate}</td>
                    <td className="border border-gray-300 p-3 text-sm">Beginner</td>
                    <td className="border border-gray-300 p-3 text-sm bg-green-100 font-semibold">3A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-8">
              ※Level placement result can be adjusted through additional consultation with Korean language teachers or according to each King Sejong Institute's learning condition.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Detailed Evaluation Table */}
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4"> Detailed evaluation result</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-sm font-medium">Details area</th>
                        <th className="border border-gray-300 p-3 text-sm font-medium">Test Score</th>
                        <th className="border border-gray-300 p-3 text-sm font-medium">Points possible</th>
                        <th className="border border-gray-300 p-3 text-sm font-medium">Percentage correct</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 text-sm font-medium">Vocabulary</td>
                        <td className="border border-gray-300 p-3 text-sm text-center">{vocabScore}</td>
                        <td className="border border-gray-300 p-3 text-sm text-center">44</td>
                        <td className="border border-gray-300 p-3 text-sm text-center bg-blue-50">{vocabPercentage}%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-sm font-medium">Grammar</td>
                        <td className="border border-gray-300 p-3 text-sm text-center">{grammarScore}</td>
                        <td className="border border-gray-300 p-3 text-sm text-center">56</td>
                        <td className="border border-gray-300 p-3 text-sm text-center bg-green-50">{grammarPercentage}%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 text-sm font-medium">Understand</td>
                        <td className="border border-gray-300 p-3 text-sm text-center">{understandScore}</td>
                        <td className="border border-gray-300 p-3 text-sm text-center">100</td>
                        <td className="border border-gray-300 p-3 text-sm text-center bg-yellow-50">{understandPercentage}%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Radar Chart Visualization */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-6 text-gray-800">Performance Radar</h3>
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    
                    {/* Background circles */}
                    {[20, 40, 60, 80].map((r, i) => (
                      <circle
                        key={i}
                        cx="100"
                        cy="100"
                        r={r}
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="1"
                      />
                    ))}
                    
                    {/* Axis lines */}
                    <line x1="100" y1="20" x2="100" y2="180" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="30" y1="150" x2="170" y2="50" stroke="#e5e7eb" strokeWidth="1"/>
                    <line x1="30" y1="50" x2="170" y2="150" stroke="#e5e7eb" strokeWidth="1"/>
                    
                    {/* Data polygon */}
                    <polygon
                      points={`100,${100 - (vocabPercentage * 0.8)} ${100 + (grammarPercentage * 0.69)},${100 + (grammarPercentage * 0.4)} ${100 - (understandPercentage * 0.69)},${100 + (understandPercentage * 0.4)}`}
                      fill="rgba(59, 130, 246, 0.3)"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                    
                    {/* Data points */}
                    <circle cx="100" cy={100 - (vocabPercentage * 0.8)} r="4" fill="#3b82f6"/>
                    <circle cx={100 + (grammarPercentage * 0.69)} cy={100 + (grammarPercentage * 0.4)} r="4" fill="#3b82f6"/>
                    <circle cx={100 - (understandPercentage * 0.69)} cy={100 + (understandPercentage * 0.4)} r="4" fill="#3b82f6"/>
                    
                    {/* Labels */}
                    <text x="100" y="15" textAnchor="middle" className="text-xs fill-gray-600" fontSize="12">Vocabulary</text>
                    <text x="185" y="155" textAnchor="middle" className="text-xs fill-gray-600" fontSize="12">Grammar</text>
                    <text x="15" y="155" textAnchor="middle" className="text-xs fill-gray-600" fontSize="12">Understand</text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <button 
                onClick={() => window.print()} 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
              >
                 Print Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8 pb-6 border-b-2 border-blue-600">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">한국어 능력 평가 시험 (Level 1)</h1>
            <p className="text-sm text-gray-600 mb-1">Korean Proficiency Test - Beginner Level</p>
            <p className="text-sm text-gray-500">امتحان تحديد مستوى اللغة الكورية - المستوى الأول</p>
          </div>
          
          {/* Instructions */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6 text-sm text-gray-700 border-l-4 border-blue-400">
            <strong>지시사항 (Instructions / التعليمات):</strong><br/>
            • 각 문제에서 가장 적절한 답을 선택하세요.<br/>
            • Choose the most appropriate answer for each question.<br/>
            • اختر الإجابة الأنسب لكل سؤال.
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {questions.map((q, index) => {
              const isNewSection = index === 0 || 
                (q.id === 11) || 
                (q.id === 16);
              
              return (
                <div key={q.id}>
                  {/* Section Title */}
                  {isNewSection && (
                    <div className="bg-blue-100 p-4 rounded-lg mb-6 border-l-4 border-blue-500">
                      <div className="font-bold text-blue-800 whitespace-pre-line text-sm">
                        {getSectionTitle(q.id)}
                      </div>
                    </div>
                  )}
                  
                  {/* Question */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex items-start mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-3 mt-1">
                        {q.id}
                      </span>
                      <div className="flex-1">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-3 border-l-blue-400 mb-4">
                          <div className="text-base leading-relaxed">
                            {formatQuestionText(q.korean)}
                          </div>
                        </div>
                        
                        {/* Options */}
                        <div className="grid grid-cols-2 gap-3">
                          {q.options.map((option, optIndex) => {
                            const optionValue = q.type === 'mark' ? option : (optIndex + 1).toString();
                            const isSelected = answers[q.id] === optionValue;
                            
                            return (
                              <button
                                key={optIndex}
                                onClick={() => handleAnswerChange(q.id, optionValue)}
                                className={`p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                                  isSelected 
                                    ? 'bg-blue-100 border-blue-500 shadow-md' 
                                    : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-blue-300'
                                }`}
                              >
                                <span className="font-semibold text-blue-600 mr-2">
                                  {option.split(' ')[0]}
                                </span>
                                <span className="text-gray-800">
                                  {option.substring(option.indexOf(' ') + 1)}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">시험 완료 - Test Completed - انتهاء الاختبار</h3>
              <p className="text-sm text-green-700">답안을 검토하고 제출하세요 - Review your answers and submit - راجع إجاباتك وسلّم الاختبار</p>
            </div>
            <button 
              onClick={submitTest}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg text-lg"
            >
              🎯 Submit Test / تسليم الاختبار
            </button>
          </div>
        </div>
      </div>
    </div>
  );}
  export default KoreanLevel1Test;