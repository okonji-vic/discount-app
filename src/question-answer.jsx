import React from 'react'


function Form() {
    const [answer, setAnswer] = React.useState('')
    const [error, setError] = React.useState(null)
    const [status, setStatus] = React.useState('typing')
  
    if (status === 'success') {
      return <h1 tabIndex="-1">That's right!</h1>
    } else if (status === 'submitting') {
    return <p>{status}</p>
  }
    async function handleSubmit(e) {
      e.preventDefault()
      setStatus('submitting')
      try {
        await submitForm(answer)
        setStatus('success')
      } catch (err) {
        setStatus('typing')
        setError(err)
      }
    }
  
    function handleTextareaChange(e) {
      setAnswer(e.target.value)
    }
  
    return (
      <>
        <h2>Sample quiz</h2>
        <p>What should be the correct value?</p>
        <form onSubmit={handleSubmit} className="grid mb-300px">
          <textarea
            className="input"
            placeholder="Type your answer here..."
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
          <br />
          <button
            className={`btn ${answer.length === 0 || status === 'submitting' ? 'disabled bg-blue-300 cursor-not-allowed' : ''}`}
            disabled={answer.length === 0 || status === 'submitting'}
          >
            Submit
          </button>
          {error !== null && (
            <p
              role="alert"
              className="Error"
            >
              {error.message}
            </p>
          )}
        </form>
        <Accordion />
      </>
    )
  }
  
  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let correct = answer.toLowerCase() == 'true'
        if (correct) {
          resolve()
        } else {
          reject(new Error('Good guess but a wrong answer. Try again!'))
        }
      }, 5000)
    })
  }


  function Panel({ title, children, isActive, onShow }) {
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button className="btn" onClick={onShow}>
            Show
          </button>
        )}
      </section>
    )
  }
  
  function Accordion() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
      <>
        <h2>Coding Schools</h2>
        <Panel
          title="AltSchool Africa"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          Pushing to be the institution in Africa and the world at large. Here at
          AltSchool Africa, we believe in the power of education to change the
          world.
        </Panel>
        <Panel
          title="Others"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          Other coding schools in Africa are doing great things but cannot out
          pace and match the quality of education we provide at AltSchool Africa.
        </Panel>
        {/* <Panel
          title="2nd others"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        >
          schools in Africa are doing great things but cannot out
          pace and match the quality of education we provide at AltSchool Africa.
        </Panel> */}
      </>
    )
  }

export default Form;