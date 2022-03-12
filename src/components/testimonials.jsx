export const Testimonials = (props) => {
  return (
    <div id='testimonials' style={{marginBottom: '4em'}}>
      <div className='container'>
        <div className='row' style={{width: '100%'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    {/* <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div> */}
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
