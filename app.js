const chatOpenButton = document.getElementById('chat-open');
const chatCloseButton = document.getElementById('chat-close');
const chatWidget = document.getElementById('chat-widget');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatLog = document.getElementById('chat-log');

const cannedAnswers = [
  {
    pattern: /(wifi|Wi-?Fi|ネット)/i,
    answer: '主要観光エリアの無料Wi-Fi情報をご案内できます。エリア名を入力してください。',
  },
  {
    pattern: /(電車|train|交通|行き方)/i,
    answer: '出発地と目的地を送っていただければ、推奨ルートを回答します。',
  },
  {
    pattern: /(クーポン|discount|割引)/i,
    answer: '現在配布中の割引クーポンを確認します。希望エリアを教えてください。',
  },
];

chatOpenButton.addEventListener('click', () => {
  chatWidget.classList.remove('hidden');
  chatInput.focus();
});

chatCloseButton.addEventListener('click', () => {
  chatWidget.classList.add('hidden');
});

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  chatInput.value = '';

  const matched = cannedAnswers.find((entry) => entry.pattern.test(message));
  const reply = matched
    ? matched.answer
    : 'ありがとうございます。担当オペレーターへ引き継ぎます。しばらくお待ちください。';

  window.setTimeout(() => appendMessage(reply, 'bot'), 300);
});

function appendMessage(text, role) {
  const p = document.createElement('p');
  p.className = role;
  p.textContent = text;
  chatLog.appendChild(p);
  chatLog.scrollTop = chatLog.scrollHeight;
}
