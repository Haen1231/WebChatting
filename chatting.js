const root = document.getElementById("root");
const Top = CreateTag("div","Top", root);
const BubbleDiv =CreateTag("div","BubbleDiv", root);
const InputDiv = CreateTag("div","InputDiv", root);

const h1 = CreateTag("h1","h1", Top);
h1.innerText = "Chatting Room";

const InputForm = CreateTag("form","InputForm", InputDiv);
const InputText = CreateTag("input","Text", InputForm);
InputText.setAttribute("type","text");

const SubmitBtn = CreateTag("button","SubmitBtn", InputForm);
SubmitBtn.innerText = "전송";

function CreateTag (tag, id, parentTag) {
  const newTag = document.createElement(tag);
  newTag.setAttribute("id",id);
  parentTag.appendChild(newTag);
  return newTag
}

function HandleSubmit (event) {
  event.preventDefault();
  if(InputText.value){
    const Content = InputText.value;
    const SpeechBubble = MakeSpeechBubble(Content);
    ShowSpeechBubble(SpeechBubble);
  }
}

function ShowSpeechBubble (SpeechBubble) {
  BubbleDiv.appendChild(SpeechBubble);
  window.scrollTo(0, document.body.scrollHeight);
  CleanValue(InputText);
}

function CleanValue (target) {
  target.value = '';
}

function MakeSpeechBubble (content) {
  const contentDiv = CreateTag('div','contentDiv', BubbleDiv);
  const SubDiv = CreateTag('div','subDiv',contentDiv);
  const Bubble = CreateTag('span','bubbleSpan', SubDiv);
  const time = createTimeSpan();

  contentDiv.appendChild(time);
  Bubble.innerText = content;

  return SubDiv;
}

function createTimeSpan () {
  const span = document.createElement('span');
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  span.innerText = `${hours}:${minutes}`;

  return span
}

InputForm.addEventListener('submit', HandleSubmit);
SubmitBtn.addEventListener('click', HandleSubmit);