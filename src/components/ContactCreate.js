import React from 'react';

export default class ContactCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        // e.target.name : input 의 name 속성 값
        this.setState(nextState);
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        };

        this.props.onCreate(contact);

        this.setState({
            name: '',
            phone: ''
        });

        this.nameInput.focus();
        // ref 는 react.js 에서 element 를 가리키기 위해서 사용
        // id 도 있지만 component 를 조합했을 때 중복될 수도 있기 때문
        // constructor 와 render 메서드에서는 ref 를 사용할 수 없음
    }

    handleKeyPress(e) {
        if (e.charCode===13) {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h2>Create Contact</h2>
                <p>
                    <input type="text" name="name"
                        placeholder="name" value={this.state.name}
                        onChange={this.handleChange}
                        ref={(ref) => { this.nameInput = ref}} />
                    <input type="text" name="phone"
                        placeholder="phone" value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress} />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        )
    }
}

ContactCreate.propTypes = {
    onCreate: React.PropTypes.func
}

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined'); }
}
