import React from 'react';

export default class StreamcraftHelper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      theatreMode: {
        label: ['el-checkbox', 'manage-item'],
        span: ['el-checkbox__input'],
      },
      likesAnimation: {
        label: ['el-checkbox', 'manage-item'],
        span: ['el-checkbox__input'],
      },
      autoLikes: {
        label: ['el-checkbox', 'manage-item'],
        span: ['el-checkbox__input'],
        interval: null,
      },
      autoOpenChest: {
        label: ['el-checkbox', 'manage-item'],
        span: ['el-checkbox__input'],
        interval: null,
      },
      hideRankingAndVIP: {
        label: ['el-checkbox', 'manage-item'],
        span: ['el-checkbox__input'],
      },
    };
  }

  toggleVisible() {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  toggleOption(e) {
    let { target } = e;

    if (target.nodeName === 'SPAN') return;

    while (target.nodeName !== 'HTML' && target.nodeName !== 'LABEL') {
      target = target.parentNode;
    }

    const optionName = target.querySelector('.el-checkbox__label').innerText;
    switch (optionName) {
      case 'Theatre Mode':
        this.setState((prev) => {
          const { label, span } = prev.theatreMode;

          if (label.includes('is-checked')) {
            label.splice(-1, 1);
            span.splice(-1, 1);
          } else {
            label.push('is-checked');
            span.push('is-checked');
          }

          return { theatreMode: { label, span } };
        });
        break;
      case 'Likes Animation':
        this.setState((prev) => {
          const { label, span } = prev.likesAnimation;

          if (label.includes('is-checked')) {
            label.splice(-1, 1);
            span.splice(-1, 1);

            document.querySelector('.hearts').style.display = '';
          } else {
            label.push('is-checked');
            span.push('is-checked');

            document.querySelector('.hearts').style.display = 'none';
          }

          return { likesAnimation: { label, span } };
        });
        break;
      case 'Auto Likes':
        this.setState((prev) => {
          const { label, span } = prev.autoLikes;
          let { interval } = prev.autoLikes;

          if (label.includes('is-checked')) {
            label.splice(-1, 1);
            span.splice(-1, 1);

            clearInterval(interval);
            interval = null;
          } else {
            label.push('is-checked');
            span.push('is-checked');

            interval = setInterval(() => {
              document.querySelector('.like-icon').click();
            }, 1);
          }

          return { autoLikes: { label, span, interval } };
        });
        break;
      case 'Auto Open Chest':
        this.setState((prev) => {
          const { label, span } = prev.autoOpenChest;
          let { interval } = prev.autoOpenChest;

          if (label.includes('is-checked')) {
            label.splice(-1, 1);
            span.splice(-1, 1);

            clearInterval(interval);
            interval = null;
          } else {
            label.push('is-checked');
            span.push('is-checked');

            interval = setInterval(() => {

            }, 1);
          }

          return { autoOpenChest: { label, span, interval } };
        });
        break;
      case 'Hide Ranking and VIP':
        this.setState((prev) => {
          const { label, span } = prev.hideRankingAndVIP;

          if (label.includes('is-checked')) {
            label.splice(-1, 1);
            span.splice(-1, 1);

            document.querySelector('.contribution-guard').style.display = '';
          } else {
            label.push('is-checked');
            span.push('is-checked');

            document.querySelector('.contribution-guard').style.display = 'none';
          }

          return { hideRankingAndVIP: { label, span } };
        });
        break;
      default:
    }
  }

  render() {
    const {
      visible, theatreMode, likesAnimation, autoLikes, autoOpenChest, hideRankingAndVIP,
    } = this.state;

    return (
      <>
        <i className="icon set-icon" role="presentation" onClick={this.toggleVisible.bind(this)} />
        {visible && (
          <div className="manage-bar" style={{ userSelect: 'none' }}>
            <h4>Streamcraft Helper</h4>
            <div className="manage-list">
              <p>
                <label role="checkbox" className={theatreMode.label.join(' ')} onClick={this.toggleOption.bind(this)}>
                  <span aria-checked="mixed" className={theatreMode.span.join(' ')}>
                    <span className="el-checkbox__inner" />
                    <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
                  </span>
                  <span className="el-checkbox__label">Theatre Mode</span>
                </label>
              </p>
              <p>
                <label role="checkbox" className={likesAnimation.label.join(' ')} onClick={this.toggleOption.bind(this)}>
                  <span aria-checked="mixed" className={likesAnimation.span.join(' ')}>
                    <span className="el-checkbox__inner" />
                    <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
                  </span>
                  <span className="el-checkbox__label">Likes Animation</span>
                </label>
              </p>
              <p>
                <label role="checkbox" className={autoLikes.label.join(' ')} onClick={this.toggleOption.bind(this)}>
                  <span aria-checked="mixed" className={autoLikes.span.join(' ')}>
                    <span className="el-checkbox__inner" />
                    <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
                  </span>
                  <span className="el-checkbox__label">Auto Likes</span>
                </label>
              </p>
              <p>
                <label role="checkbox" className={autoOpenChest.label.join(' ')} onClick={this.toggleOption.bind(this)}>
                  <span aria-checked="mixed" className={autoOpenChest.span.join(' ')}>
                    <span className="el-checkbox__inner" />
                    <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
                  </span>
                  <span className="el-checkbox__label">Auto Open Chest</span>
                </label>
              </p>
              <p>
                <label role="checkbox" className={hideRankingAndVIP.label.join(' ')} onClick={this.toggleOption.bind(this)}>
                  <span aria-checked="mixed" className={hideRankingAndVIP.span.join(' ')}>
                    <span className="el-checkbox__inner" />
                    <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
                  </span>
                  <span className="el-checkbox__label">Hide Ranking and VIP</span>
                </label>
              </p>
            </div>
          </div>
        )}
      </>
    );
  }
}
