export const Footer = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'} target='_blank' rel='noreferrer'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'} target='_blank' rel='noreferrer'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'} target='_blank' rel='noreferrer'>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.github : '/'} target='_blank' rel='noreferrer'>
                      <i className='fa fa-github'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className='acknowledgement'>
        <div className='container text-center'>
          <p>
            &copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
