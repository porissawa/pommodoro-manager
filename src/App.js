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
  border: 'white 1px solid',
  marginBottom: '1em',
}

const itemsSpace = {
  marginBottom: '0.8em',
}

class Dashboard extends React.Component {
  state = {
    pomoCards: [
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
  }

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
        <EditablePomoCardList 
          pomoCards={this.state.pomoCards}/>
        <ToggleableCardForm/>
      </div>
    )
  }
}

class EditablePomoCardList extends React.Component {

  render() {
    const pomoCards = this.props.pomoCards.map((pomoCard) => (
      <EditablePomoCard
        title={pomoCard.title}
        project={pomoCard.project}
        countdown={pomoCard.countdown}
      />
    ))
    return (
      <div id='pomoCards'>
        {pomoCards}
      </div>
    )
  }
}

class EditablePomoCard extends React.Component {
  state = {
    editFormOpen: false,
  }

  render() {
    if (this.state.editFormOpen) { 
      return (
        <PomoCardForm 
          title={this.props.title} 
          project={this.props.project}
        />
      )
    } else {
      return ( 
        <PomoCard
          title={this.props.title} 
          project={this.props.project}
          countdown={this.props.countdown}
        />
      )
    }
  } 
}


class PomoCardForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
    countdown: this.props.countdown || '',
  }

  handleTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  handleProjectChange = (e) => {
    this.setState({project: e.title.value})
  }

  handleCountdownChange = (e) => {
    this.setState({countdown: e.target.value})
  }

  render() {
    const saveCard = this.props.title ? 'Update' : 'Create'

    return (
      <div style={{...cardStyle}}>
        <h2>Nova tarefa</h2>
        <div style={itemsSpace}>
          <input type='text' 
            className='title' 
            value={this.state.title}
            onChange={this.handleTitleChange} />
        </div>
        <div style={itemsSpace}>
          <input type='text' 
            className='project' 
            value={this.state.project}
            onChange={this.handleProjectChange} />
        </div>
        <div style={itemsSpace}>
          <input type='number' 
            className='countdown' 
            placeholder='Minutes'
            onChange={this.handleCountdownChange} />
        </div>
        <div className='bottom buttons' style={{display: 'flex', justifyContent: 'space-between', }}>
          <button className='Save' style={{
            backgroundColor: '#6495ed',
            color: 'white',
            padding: '0.6rem',
            border: 'none',
          }}
          >
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

class ToggleableCardForm extends React.Component {
  state ={
    isOpen: false,
  }

  handleFormOpen = () => {
    this.setState({isOpen: true})
  }

  handleFormClose = () => {
    this.setState({ isOpen: false })
  }

  handleFormSubmit = (pomoCard) => {
    this.props.onFormSubmit(pomoCard)
    this.setState({isOpen: false})
  }

  render() {
    if(this.state.isOpen) {
        return (
            <PomoCardForm 
                onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClose}/>
        )
    } else {
        return (
            <div>
                <button 
                    onClick={this.handleFormOpen}>
                    <b>+</b>
                </button>
            </div>
        )
    }
  }
}

class PomoCard extends React.Component {
  render() {
    return (
      <div>
        <div className='content' style={cardStyle}>
          <div className='title' style={itemsSpace}>
            {this.props.title}
          </div>
          <div className='project' style={itemsSpace}>
            {this.props.project}
          </div>
          <div className='countdown' style={itemsSpace}>
            {this.props.countdown}
          </div>
          <div className='extra'>
            <button className='edit' style={{float: 'right'}}>Edit</button><br/>
            <button className='discard' style={{float: 'right'}}>Discard</button>
          </div>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <Dashboard />,
  document.getElementById('content')
)

export default Dashboard