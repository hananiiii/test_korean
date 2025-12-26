import React, { useState, useEffect } from 'react';

const KoreanLevel1Test = () => {
  const [name, setName] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [answers, setAnswers] = useState<{ [key: number]: string[] }>({});
  const [showTest, setShowTest] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [vocabScore, setVocabScore] = useState(0);
  const [grammarScore, setGrammarScore] = useState(0);
  const [understandScore, setUnderstandScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(59 * 60);

  const questions = [
    // ================= EXAMPLE =================
    {
      id: 0,
      isExample: true,
      korean: '※ <보기>\n사과가 있습니다. 그리고 배도 있습니다.\n① 고향 ② 얼굴 ③ 과일 ④ 계절',
      options: [],
      correct: [3],
      multipleAnswers: false
    },

    // ================= GRAMMAR - PARTICLES (1~9) =================
   {
  id: 1,
  section: 'grammar',
  korean: '1. 저( ) 학생입니다.',
  options: ['① 가', '② 는', '③ 도', '④ 만'],
  correct: [2],
  multipleAnswers: false
},
{
  id: 2,
  section: 'grammar',
  korean: '2. 친구( ) 만났어요.',
  options: ['① 를', '② 에게', '③ 한테', '④ 와'],
  correct: [1],
  multipleAnswers: false
},
{
  id: 3,
  section: 'grammar',
  korean: '3. 학교( ) 갑니다.',
  options: ['① 로', '② 에서', '③ 에', '④ 까지'],
  correct: [3],
  multipleAnswers: false
},
{
  id: 4,
  section: 'grammar',
  korean: '4. 어제 도서관( ) 공부했어요.',
  options: ['① 에', '② 에서', '③ 으로', '④ 까지'],
  correct: [2],
  multipleAnswers: false
},
{
  id: 5,
  section: 'grammar',
  korean: '5. 아침( ) 빵을 먹어요.',
  options: ['① 에', '② 에서', '③ 부터', '④ 까지'],
  correct: [1],
  multipleAnswers: false
},
{
  id: 6,
  section: 'grammar',
  korean: '6. 비( ) 옵니다.',
  options: ['① 를', '② 가', '③ 이', '④ 도'],
  correct: [2],
  multipleAnswers: false
},
{
  id: 7,
  section: 'grammar',
  korean: '7. 친구( ) 같이 영화를 봤어요.',
  options: ['① 에게', '② 한테', '③ 와', '④ 하고'],
  correct: [3],
  multipleAnswers: false
},
{
  id: 8,
  section: 'grammar',
  korean: '8. 저는 커피( ) 좋아해요.',
  options: ['① 를', '② 가', '③ 은', '④ 도'],
  correct: [1],
  multipleAnswers: false
},
{
  id: 9,
  section: 'grammar',
  korean: '9. 내일 서울( ) 출발합니다.',
  options: ['① 에', '② 에서', '③ 로', '④ 까지'],
  correct: [2],
  multipleAnswers: false
},

    // ================= GRAMMAR - VERB CONJUGATION (10~13) =================
    {
      id: 10,
      section: 'grammar',
      korean: '10. 저는 어제 공원에 ( ).',
      options: ['① 가요', '② 갔어요', '③ 갈 거예요', '④ 갑니다'],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 11,
      section: 'grammar',
      korean: '11. 내일 친구를 ( ).',
      options: ['① 만났어요', '② 만나요', '③ 만날 거예요', '④ 만납니다'],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 12,
      section: 'grammar',
      korean: '12. 지금 저는 책을 ( ).',
      options: ['① 읽었어요', '② 읽을 거예요', '③ 읽어요', '④ 읽어'],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 13,
      section: 'grammar',
      korean: '13. 어제 식당에서 밥을 ( ).',
      options: ['① 먹어요', '② 먹었어요', '③ 먹을 거예요', '④ 먹습니다'],
      correct: [2],
      multipleAnswers: false
    },

    // ================= VOCABULARY - OPPOSITES (14~23) =================
    {
      id: 14,
      section: 'vocabulary',
      korean: '14. 가: 이 가방이 크다고 생각해요?\n나: 아니요, 가방이 ( ).',
      options: ['① 작습니다', '② 큽니다', '③ 좋습니다', '④ 나쁩니다'],
      correct: [1],
      multipleAnswers: false
    },
    {
      id: 15,
      section: 'vocabulary',
      korean: '15. 가: 오늘 날씨가 덥네요.\n나: 네, 어제는 ( ).',
      options: ['① 더웠어요', '② 추웠어요', '③ 좋았어요', '④ 싫었어요'],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 16,
      section: 'vocabulary',
      korean: '16. 가: 영화가 재미있었어요?\n나: 아니요, ( ).',
      options: ['① 좋았어요', '② 재미없었어요', '③ 길었어요', '④ 짧았어요'],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 17,
      section: 'vocabulary',
      korean: '17. 가: 이 음식이 싸요?\n나: 아니요, ( ).',
      options: ['① 저렴해요', '② 비싸요', '③ 맛있어요', '④ 달아요'],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 18,
      section: 'vocabulary',
      korean: '18. 가: 학교가 집에서 멀어요?\n나: 아니요, ( ).',
      options: ['① 좋아요', '② 커요', '③ 가까워요', '④ 예뻐요'],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 19,
      section: 'vocabulary',
      korean: '19. 가: 이 방이 밝아요.\n나: 아니요, 저 방은 ( ).',
      options: ['① 밝아요', '② 깨끗해요', '③ 넓어요', '④ 어두워요'],
      correct: [4],
      multipleAnswers: false
    },
    {
      id: 20,
      section: 'vocabulary',
      korean: '20. 가: 오빠가 키가 커요?\n나: 아니요, ( ).',
      options: ['① 키가 커요', '② 잘생겼어요', '③ 키가 작아요', '④ 친절해요'],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 21,
      section: 'vocabulary',
      korean: '21. 가: 이 교실에 학생이 많아요?\n나: 아니요, ( ).',
      options: ['① 학생이 많아요', '② 교실이 커요', '③ 교실이 넓어요', '④ 학생이 적어요'],
      correct: [4],
      multipleAnswers: false
    },
    {
      id: 22,
      section: 'vocabulary',
      korean: '22. 가: 아침에 일찍 일어나요?\n나: 아니요, ( ) 일어나요.',
      options: ['① 빨리', '② 늦게', '③ 자주', '④ 가끔'],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 23,
      section: 'vocabulary',
      korean: '23. 가: 이 음식이 맵다고 생각해요?\n나: 아니요, ( ).',
      options: ['① 매워요', '② 싱거워요', '③ 달아요', '④ 안 매워요'],
      correct: [4],
      multipleAnswers: false
    },

    // ================= GRAMMAR - SENTENCE ORDER (24~27) =================
    {
      id: 24,
      section: 'grammar',
      korean: '24. 다음을 순서에 맞게 배열한 것을 고르십시오.\n(가) 도서관에서 책을 봅니다.\n(나) 저는 학교에 갑니다.\n(다) 수업 후에 도서관에 갑니다.\n(라) 학교에서 수업을 듣습니다.',
      options: [
        '① (가)-(나)-(다)-(라)',
        '② (라)-(나)-(다)-(가)',
        '③ (나)-(다)-(라)-(가)',
        '④ (나)-(라)-(다)-(가)'
      ],
      correct: [4],
      multipleAnswers: false
    },
    {
      id: 25,
      section: 'grammar',
      korean: '25. 다음을 순서에 맞게 배열한 것을 고르십시오.\n(가) 커피를 마십니다.\n(나) 카페에 갑니다.\n(다) 맛있습니다.\n(라) 물도 마십니다.',
      options: [
        '① (나)-(가)-(다)-(라)',
        '② (가)-(나)-(다)-(라)',
        '③ (나)-(다)-(가)-(라)',
        '④ (라)-(가)-(나)-(다)'
      ],
      correct: [1],
      multipleAnswers: false
    },
    {
      id: 26,
      section: 'grammar',
      korean: '26. 다음을 순서에 맞게 배열한 것을 고르십시오.\n(가) 병원에 갑니다.\n(나) 몸이 아픕니다.\n(다) 의사를 만납니다.\n(라) 약을 받습니다.',
      options: [
        '① (나)-(가)-(다)-(라)',
        '② (가)-(나)-(다)-(라)',
        '③ (나)-(가)-(라)-(다)',
        '④ (라)-(다)-(가)-(나)'
      ],
      correct: [1],
      multipleAnswers: false
    },
    {
      id: 27,
      section: 'grammar',
      korean: '27. 다음을 순서에 맞게 배열한 것을 고르십시오.\n(가) 날씨가 더워요.\n(나) 물을 마십니다.\n(다) 시원해집니다.\n(라) 카페에서 물을 주문합니다.',
      options: [
        '① (가)-(라)-(나)-(다)',
        '② (가)-(나)-(다)-(라)',
        '③ (라)-(가)-(나)-(다)',
        '④ (나)-(가)-(다)-(라)'
      ],
      correct: [1],
      multipleAnswers: false
    },

    // ================= VOCABULARY - NUMBERS & COUNTERS (28~32) =================
    {
      id: 28,
      section: 'vocabulary',
      korean: '28. 책이 ( ) 권 있습니다.',
      options: ['① 세', '② 삼', '③ 셋', '④ 셋째'],
      correct: [1],
      multipleAnswers: false
    },
    {
      id: 29,
      section: 'vocabulary',
      korean: '29. 교실에 학생이 네 ( ) 있습니다.',
      options: ['① 권', '② 자루', '③ 명', '④ 개'],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 30,
      section: 'vocabulary',
      korean: '30. 컵이 ( ) 개 있습니다.',
      options: ['① 둘', '② 이', '③ 두', '④ 이십'],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 31,
      section: 'vocabulary',
      korean: '31. 연필이 ( ) 자루 있습니다.',
      options: ['① 세', '② 삼', '③ 셋', '④ 삼십'],
      correct: [1],
      multipleAnswers: false
    },
    {
      id: 32,
      section: 'vocabulary',
      korean: '32. 가: 가방은 몇 개 있어요?\n나: 한 ( ) 있어요.',
      options: ['① 명', '② 자루', '③ 개', '④ 권'],
      correct: [3],
      multipleAnswers: false
    },

    // ================= UNDERSTANDING - WRONG ONE (33~36) =================
    {
      id: 33,
      section: 'understanding',
      korean: '33. 저는 학생입니다. 매일 학교에 갑니다. 아침에 빵을 먹습니다. 친구들과 같이 공부합니다.',
      options: [
        '① 학교에 다닙니다.',
        '② 아침에 빵을 먹습니다.',
        '③ 친구들과 같이 공부합니다.',
        '④ 매일 학교에 갑니다.'
      ],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 34,
      section: 'understanding',
      korean: '34. 저는 회사원입니다. 오전에 회의가 있습니다. 일을 많이 합니다. 저녁에는 집에서 쉽니다.',
      options: [
        '① 회사에서 일합니다.',
        '② 오전에 회의가 있습니다.',
        '③ 일을 많이 합니다.',
        '④ 저녁에는 집에서 쉽니다.'
      ],
      correct: [4],
      multipleAnswers: false
    },
    {
      id: 35,
      section: 'understanding',
      korean: '35. 이번 주에 시험이 있습니다. 열심히 공부합니다. 도서관에 자주 갑니다. 매일 운동합니다.',
      options: [
        '① 이번 주에 시험이 있습니다.',
        '② 열심히 공부합니다.',
        '③ 매일 운동합니다.',
        '④ 도서관에 자주 갑니다.'
      ],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 36,
      section: 'understanding',
      korean: '36. 가방에 책과 공책이 있습니다. 연필과 지우개를 사용합니다. 수업 시간에 필기합니다. 오후에 수업이 있습니다.',
      options: [
        '① 가방에 책과 공책이 있습니다.',
        '② 연필과 지우개를 사용합니다.',
        '③ 수업 시간에 필기합니다.',
        '④ 아침에 수업이 있습니다.'
      ],
      correct: [4],
      multipleAnswers: false
    },

    // ================= UNDERSTANDING - SAME MEANING (37~40) =================
    {
      id: 37,
      section: 'understanding',
      korean: '37. 비가 와요. 오늘 밖에 나가지 않을 거예요.',
      options: [
        '① 친구를 만날 거예요.',
        '② 집에 있을 거예요.',
        '③ 공원에 갈 거예요.',
        '④ 운동을 할 거예요.'
      ],
      correct: [2],
      multipleAnswers: false
    },
    {
      id: 38,
      section: 'understanding',
      korean: '38. 시험이 있어요. 그래서 오늘 공부할 거예요.',
      options: [
        '① 오늘 놀 거예요.',
        '② 여행을 갈 거예요.',
        '③ 열심히 공부할 거예요.',
        '④ 영화를 볼 거예요.'
      ],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 39,
      section: 'understanding',
      korean: '39. 날씨가 더워요. 시원한 곳에 가고 싶어요.',
      options: [
        '① 따뜻한 옷을 입고 싶어요.',
        '② 집에만 있을 거예요.',
        '③ 시원한 곳에 갈 거예요.',
        '④ 운동을 할 거예요.'
      ],
      correct: [3],
      multipleAnswers: false
    },
    {
      id: 40,
      section: 'understanding',
      korean: '40. 날씨가 추워요. 새 옷이 필요해요.',
      options: [
        '① 따뜻한 옷을 살 거예요.',
        '② 수영을 할 거예요.',
        '③ 아이스크림을 먹을 거예요.',
        '④ 창문을 열 거예요.'
      ],
      correct: [1],
      multipleAnswers: false
    }
  ];

  useEffect(() => {
    if (showTest && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && showTest && !showResults) {
      submitTest();
    }
  }, [timeLeft, showTest, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (name && nationality && birthYear) setShowTest(true);
  };

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: [value] }));
  };

  const submitTest = () => {
    let vocabCount = 0, grammarCount = 0, understandCount = 0;
    let vocabTotal = 0, grammarTotal = 0, understandTotal = 0;

    questions.forEach(q => {
      if (!q.isExample) {
        const userAns = answers[q.id] || [];
        const isCorrect = q.correct.every(c => userAns.includes(c.toString())) && userAns.length === q.correct.length;
        if (q.section === 'vocabulary') { vocabTotal++; if (isCorrect) vocabCount++; }
        if (q.section === 'grammar') { grammarTotal++; if (isCorrect) grammarCount++; }
        if (q.section === 'understanding') { understandTotal++; if (isCorrect) understandCount++; }
      }
    });

    const vScore = vocabTotal > 0 ? Math.round((vocabCount / vocabTotal) * 44) : 0;
    const gScore = grammarTotal > 0 ? Math.round((grammarCount / grammarTotal) * 56) : 0;
    const uScore = understandTotal > 0 ? Math.round((understandCount / understandTotal) * 100) : 0;

    setVocabScore(vScore);
    setGrammarScore(gScore);
    setUnderstandScore(uScore);
    setShowResults(true);
  };

  const getSectionTitle = (id: number) => {
    if (id === 1) return '※ [1~9] 문법 - 조사\n(Grammar - Particles: Subject 는/가, Object 를/을, Location 에/에서, Time 에, With 와/과)';
    if (id === 10) return '※ [10~13] 동사 활용 - 시제를 고르십시오.\n(Verb Conjugation - Choose the correct tense)';
    if (id === 14) return '※ [14~23] 밑줄 친 부분과 반대되는 뜻을 가진 것을 고르십시오.\n(Choose the word that has the opposite meaning to the underlined part)';
    if (id === 24) return '※ [24~27] 다음을 순서에 맞게 배열한 것을 고르십시오.\n(Choose the correct order)';
    if (id === 28) return '※ [28~32] 숫자와 단위 명사\n(Numbers and Counters)';
    if (id === 33) return '※ [33~36] 다음을 읽고 맞지 않는 것을 고르십시오.\n(Choose the one that does not match with the other answers)';
    if (id === 37) return '※ [37~40] 다음을 읽고 내용이 같은 것을 고르십시오.\n(Choose the matching statement)';
    return '';
  };

  const formatQuestionText = (text: string) => {
    return text.split('\n').map((line, i) => (
      <div key={i} className={line.includes('(') && line.includes(')') ? 'text-gray-600 text-sm italic mt-1' : 'mb-2'}>
        {line}
      </div>
    ));
  };

  if (!showTest) {
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
        <div className="max-w-2xl mx-auto p-4 sm:p-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
            <div className="text-center mb-6 sm:mb-8 pb-4 sm:pb-6 border-b-2 border-blue-600">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">한국어 능력 평가 시험 (Level 1)</h1>
              <p className="text-xs sm:text-sm text-gray-600">Korean Proficiency Test - Beginner Level</p>
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 text-xs sm:text-sm text-gray-700">
              <strong>Instructions:</strong><br/>
              • Time limit: 59 minutes<br/>
              • Choose the most appropriate answer<br/>
              • 40 questions total
            </div>

            <div className="space-y-4">
              <div>
                <label className="block font-medium mb-2 text-sm sm:text-base">Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border p-2 sm:p-3 rounded-lg text-sm sm:text-base" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block font-medium mb-2 text-sm sm:text-base">Nationality:</label>
                <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} className="w-full border p-2 sm:p-3 rounded-lg text-sm sm:text-base" placeholder="Enter your nationality" />
              </div>
              <div>
                <label className="block font-medium mb-2 text-sm sm:text-base">Year of birth:</label>
                <input type="number" value={birthYear} onChange={e => setBirthYear(e.target.value)} className="w-full border p-2 sm:p-3 rounded-lg text-sm sm:text-base" placeholder="Enter your birth year" />
              </div>
            </div>

            <button onClick={handleStart} disabled={!name || !nationality || !birthYear} className="w-full mt-6 bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition text-sm sm:text-base">
              Start Test (59:00)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const total = vocabScore + grammarScore + understandScore;
    return (
      <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto p-4 sm:p-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">한국어 능력 평가 시험 결과</h1>
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-600 mb-2 text-sm sm:text-base">Name: {name}</p>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">Nationality: {nationality}</p>
              <p className="text-gray-600 text-sm sm:text-base">Birth Year: {birthYear}</p>
            </div>
            
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">{total}/200</p>
              <p className="text-lg sm:text-xl text-gray-600">Total Score</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-2 border-blue-300">
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-blue-800">어휘 (Vocabulary)</h3>
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">{vocabScore}</p>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">/ 44</p>
              </div>
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-2 border-green-300">
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-green-800">문법 (Grammar)</h3>
                <p className="text-3xl sm:text-4xl font-bold text-green-600">{grammarScore}</p>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">/ 56</p>
              </div>
              <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg border-2 border-yellow-300">
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-yellow-800">이해 (Understanding)</h3>
                <p className="text-3xl sm:text-4xl font-bold text-yellow-600">{understandScore}</p>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">/ 100</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <button onClick={() => window.location.reload()} className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition text-sm sm:text-base">
                Take Test Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto p-2 sm:p-6">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8 sticky top-0 bg-white z-10 pb-4 border-b-2">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">한국어 능력 평가 시험 (Level 1)</h1>
            <div className="mt-4 text-3xl sm:text-4xl font-bold text-red-600">{formatTime(timeLeft)}</div>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {questions.map((q, index) => {
              const showTitle = index === 0 || q.id === 1 || q.id === 10 || q.id === 14 || q.id === 24 || q.id === 28 || q.id === 33 || q.id === 37;

              return (
                <div key={q.id}>
                  {showTitle && !q.isExample && (
                    <div className="bg-blue-50 p-3 sm:p-5 rounded-lg mb-6 sm:mb-8 font-bold text-blue-900 border-l-4 border-blue-600 text-sm sm:text-base">
                      {getSectionTitle(q.id)}
                    </div>
                  )}

                  {q.isExample && (
                    <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg mb-8 sm:mb-10 border-2 border-yellow-400">
                      <div className="font-bold text-lg sm:text-xl text-yellow-900 mb-4">
                        ※ &lt;보기&gt; (Example)
                      </div>
                      <div className="text-base sm:text-lg leading-loose">
                        {formatQuestionText(q.korean)}
                      </div>
                      <div className="mt-4 text-green-700 font-semibold">
                        정답 (Correct Answer): ③ 과일
                      </div>
                    </div>
                  )}

                  {!q.isExample && (
                    <div className="bg-gray-50 p-4 sm:p-8 rounded-lg border border-gray-300 hover:shadow-md transition">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        <div className="bg-blue-600 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold flex-shrink-0">
                          {q.id}
                        </div>
                        <div className="flex-1 w-full">
                          <div className="bg-white p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-l-4 border-blue-500 text-sm sm:text-base">
                            {formatQuestionText(q.korean)}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {q.options.map((opt, i) => {
                              const val = (i + 1).toString();
                              const selected = (answers[q.id] || []).includes(val);
                              return (
                                <button
                                  key={i}
                                  onClick={() => handleAnswerChange(q.id, val)}
                                  className={`p-3 sm:p-5 text-left rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${
                                    selected 
                                      ? 'bg-blue-100 border-blue-600 shadow-lg transform scale-105' 
                                      : 'bg-white border-gray-300 hover:border-blue-400 hover:shadow-md'
                                  }`}
                                >
                                  <span className="font-bold text-blue-700 text-lg sm:text-xl mr-2 sm:mr-3">{opt.split(' ')[0]}</span>
                                  <span className="text-gray-800">{opt.substring(opt.indexOf(' ') + 1)}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 sm:mt-16 text-center sticky bottom-4">
            <button onClick={submitTest} className="bg-green-600 text-white px-8 sm:px-16 py-4 sm:py-6 rounded-xl text-lg sm:text-2xl font-bold hover:bg-green-700 shadow-2xl transform hover:scale-105 transition">
              제출하기 (Submit Test)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanLevel1Test;