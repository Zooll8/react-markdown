'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
   _inherits(App, _React$Component);

   function App(props) {
      _classCallCheck(this, App);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
         mark: 'Heading\n=======\n\nSub-heading\n-----------' + '\n \n### Another deeper heading\n \nParagraphs are separated' + '\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  ' + '\nline break\n\nText attributes *italic*, **bold**, ' + '\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples' + '\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges' + '\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n' + 'Created and coded by <a href="https://www.freecodecamp.com/zooll8" target="_blank">Zooll</a>'
      };
      return _this;
   }

   App.prototype.change = function change(event) {
      this.setState({
         mark: event.target.value
      });
   };

   App.prototype.createMarkup = function createMarkup() {
      return {
         __html: marked(this.state.mark)
      };
   };

   App.prototype.render = function render() {
      var _this2 = this;

      return React.createElement(
         'div',
         null,
         React.createElement(
            'div',
            { className: 'text-center' },
            'Created by ',
            React.createElement(
               'a',
               { href: 'https://www.github.com/zooll8', target: '_blank' },
               'Zooll'
            )
         ),
         React.createElement(
            'div',
            { className: 'row' },
            React.createElement('div', { className: 'col-sm-1' }),
            React.createElement(
               'div',
               { className: 'col-sm-4' },
               React.createElement(
                  'h1',
                  null,
                  'Markdown:'
               ),
               React.createElement('br', null),
               React.createElement(
                  'textarea',
                  { rows: '25', onChange: function onChange() {
                        return _this2.change(event);
                     } },
                  this.state.mark
               )
            ),
            React.createElement('div', { className: 'col-sm-2' }),
            React.createElement(
               'div',
               { className: 'col-sm-4' },
               React.createElement(
                  'h1',
                  null,
                  'Preview:'
               ),
               React.createElement('br', null),
               React.createElement('div', { className: 'width', dangerouslySetInnerHTML: this.createMarkup() })
            )
         )
      );
   };

   return App;
}(React.Component);

;
ReactDOM.render(React.createElement(App, null), document.body);