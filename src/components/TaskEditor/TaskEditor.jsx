import React, { Component } from 'react';
import { connect } from 'react-redux';
import dashboardOperations from '../../redux/dashboard/dashboard-operations';
import styles from './TaskEditor.module.css';

class TaskEditor extends Component {
   state = {
      message: '',
   };

   handleChange = e => {
      this.setState({ message: e.currentTarget.value });
   };

   handleSubmit = e => {
      e.preventDefault();

      if (this.state.message !== '') {
         this.props.onSubmit(this.state.message);
         //this.props.onSave();
         this.setState({ message: '' });
         return;
      }

      alert('Заполни текст заметки.');
   };

   render() {
      return (
         <form className={styles.editor} onSubmit={this.handleSubmit}>
            <textarea
               className={styles.textarea}
               value={this.state.message}
               onChange={this.handleChange}
            ></textarea>
            <button type="submit" className={styles.button}>
               Сохранить
            </button>
         </form>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   onSubmit: title => dispatch(dashboardOperations.addCard(title)),
});

export default connect(null, mapDispatchToProps)(TaskEditor);
