import elements from '../elements';
import helpers from './helpers';

export default {
  getFieldLabelByIndex: (state, index) => state.fields[index].label,
  html: (state) => {
    let result = '';

    for (let i = 0; i < state.fields.length; i += 1) {
      const element = elements.find((el) => el.name === state.fields[i].name);

      for (let j = 0; j < element.html.length; j += 1) {
        result += helpers.getHtml(element.html[j], state.fields[i]);
      }
    }

    return result.trim();
  },
};