export default function harmlessRansomNote(noteTxt, magazineTxt) {
  let compareObj = {};
  let noteTxtArr = noteTxt.split(' ');
  let MagazineTxtArr = magazineTxt.split(' ');
  let noteIsPossible = true;

  MagazineTxtArr.forEach(text => {
    if (!compareObj[text]) compareObj[text] = 0;
    compareObj[text]++;
  });

  noteTxtArr.forEach(text => {
    if (compareObj[text]) {
      compareObj[text]--;
      if (compareObj[text] < 0) noteIsPossible = false;
    }
    else noteIsPossible = false;
  });
  return noteIsPossible;
};

export const ransomNoteAnswer = harmlessRansomNote('this is this', 'this is the text of the note');
