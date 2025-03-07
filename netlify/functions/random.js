const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Life is what happens when you're busy making other plans.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The best way to predict the future is to create it.",
  "Happiness is not something ready-made. It comes from your own actions.",
  "The purpose of our lives is to be happy.",
  "You only live once, but if you do it right, once is enough."
];

exports.handler = async function(event, context) {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'text/plain'
  };

  try {
    // Get a random sentence
    const randomIndex = Math.floor(Math.random() * sentences.length);
    const randomSentence = sentences[randomIndex];

    return {
      statusCode: 200,
      headers,
      body: randomSentence
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: 'Error getting random sentence'
    };
  }
}; 