import * as React from 'react';
import { insertAtLineStart } from '../utils/InsertTextAtPosition';
import { ICommand, TextState, TextAreaTextApi } from './';

export const title6: ICommand = {
  name: 'title6',
  keyCommand: 'title6',
  shortcuts: 'ctrlcmd+6',
  buttonProps: { 'aria-label': 'Insert title6', title: 'Insert title 6' },
  icon: <div style={{ fontSize: 12, textAlign: 'left' }}>Title 6</div>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    insertAtLineStart('###### ', state.selection.start, api.textArea);
  },
};
