import React from 'react';

export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        };
        // state 초기화

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        // 함수 바인딩
    }

    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
            // 편집 모드로 들어갔을 때 (Edit 버튼을 클릭했을 때)
            //기존 데이터를 편집 창에 보여줌
        } else {
            this.handleEdit();  // 수정한 데이터 적용
        }

        this.setState({
            isEdit: !this.state.isEdit  // toggle
        });

        // console.log(this.state.isEdit);
        // setState 함수가 비동기이기 때문에 console 에 찍히는 값과 실제 값이 다를 수 있음
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        // e.target.name : input 의 name 속성 값
        this.setState(nextState);
        // 이벤트를 바인딩하고 있는 input 태그에 변경 값 적용
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
        // onEdit={this.handleEdit} 함수 호출
    }

    handleKeyPress(e) {
        if (e.charCode===13) {
            this.handleToggle();
        }
    }

    render() {
        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input type="text" name="name"
                        placeholder="name" value={this.state.name}
                        onChange={this.handleChange}/>
                </p>
                <p>
                    <input type="text" name="phone"
                        placeholder="phone" value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress} />
                </p>
            </div>
        )

        const view = this.state.isEdit ? (edit) : details;

        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <button onClick={this.handleToggle}>
                    {this.state.isEdit ? 'OK' : 'Edit'}
                </button>
                <button onClick={this.props.onRemove}>Remove</button>
            </div>
        )
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => { console.error('onRemove not defined'); },
    onEdit: () => { console.error('onEdit not defined'); }
};  // 기본으로 설정해주지 않으면 TypeError 발생

ContactDetails.propTypes = {
    contact: React.PropTypes.object,
    onRemove: React.PropTypes.func,
    onEdit: React.PropTypes.func
}
