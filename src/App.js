import React from 'react'
import ReactDOM from 'react-dom'

const cardStyle = {
  display: 'flex', 
  flexDirection: 'column', 
  alignContent: 'center', 
  justifyContent: 'center',
  color: '#FEFEFE',
  backgroundColor: '#444',
  padding: '1em',
  border: 'white 1px solid'
}

class Dashboard extends React.Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(#ff9966, #ff5e62)',
        width: '100%',
        height: '80vh',
      }}>
        <EditableTimerList />
        <TimerArchive />
      </div>
    )
  }
}

class EditableTimerList extends React.Component {
  pomoCards = [
    {
      title: 'Estudar React',
      project: 'Web Dev',
      countdown: '1500000',
    },
    {
      title: 'Estudar JS',
      project: 'Web Dev',
      countdown: '1500000'
    },
  ]
  render() {
    return (
      <div>
        <EditableTimer 
        title = 'Estudar React'
        project = 'Web Dev'
        countdown = '1500000'
        editFormOpen = {true}
        />
        
        <EditableTimer
        title = 'Estudar JS'
        project = 'Web Dev'
        countdown = '1500000'
        editFormOpen = {false}
        />
      </div>
    )
  }
}

class EditableTimer extends React.Component {
  render() {
    if (this.props.editFormOpen) { 
      return (
        <TimerForm 
          title={this.props.title} 
          project={this.props.project}
        />
      )
    } else {
      return ( 
        <Timer
          title={this.props.title} 
          project={this.props.project}
          countdown={this.props.countdown}
        />
      )
    }
  } 
}


class TimerForm extends React.Component {
  render() {
    const saveCard = this.props.title ? 'Update' : 'Create'

    return (
      <div style={cardStyle}>
        <h2>Nova tarefa</h2>
        <div style={{marginBottom: '1em'}}>
          <input type='text' className='title' defaultValue={this.props.title}></input>
        </div>
        <div style={{marginBottom: '1em'}}>
          <input type='text' className='project' defaultValue={this.props.project}></input>
        </div>
        <div style={{marginBottom: '1em'}}>
          <input type='text' className='countdown' placeholder='00:00'></input>
        </div>
        <div className='bottom buttons' style={{display: 'flex', justifyContent: 'space-between', }}>
          <button className='Save' style={{
            backgroundColor: '#6495ed',
            color: 'white',
            padding: '0.6rem',
            border: 'none',
          }}>
          {saveCard}
          </button>
          <button className='Cancel' style={{
            backgroundColor:'#cd2626',
            color: 'white',
            padding: '0.6rem',
            border: 'none',
          }}>
            Cancel
          </button>
        </div>
      </div>
    )
  }
}

class Timer extends React.Component {
  
  render() {
    return (
      <div style={cardStyle}>
        <h2 className='title'>{this.props.title}</h2>
        <h3 className='project'>{this.props.project}</h3>
        <h2 className='countdown'>{this.props.countdown}</h2>
      </div>
    )
  }
}

class TimerArchive extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

class Analysis extends React.Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

ReactDOM.render(
  <Dashboard />,
  document.getElementById('content')
)

export default Dashboard