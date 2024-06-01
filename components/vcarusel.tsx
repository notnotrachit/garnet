import CaruselElement from './caruselelement'


export default function VCarusel() {
    return (
      <>
        <div className="flex-col">
          
          {/* <CaruselElement 
            content="COMMUNITY BUILDING & DEVELOPMENT"
            init_pos={3}
          /> */}
          <div className='absolute'>
          <CaruselElement content="DIGITAL TRAFFIC" init_pos={2} />
          </div>
          <div className='absolute'>

          <CaruselElement content="DESIGN & BRANDING" init_pos={1} />
          </div>
          <div className='absolute'>
          <CaruselElement content="MARKETING FUNDAMENTALS" init_pos={0} />
          </div>
          <div className='absolute'>
          <CaruselElement content="PR & INFLUENCER" init_pos={-1} />
          </div>
          <div className='absolute'>
          <CaruselElement
            content="COMMUNITY BUILDING & DEVELOPMENT"
            init_pos={-2}
          />
          </div>
          {/* <CaruselElement content="DIGITAL TRAFFIC" init_pos={-3} /> */}
        </div>
      </>
    );
}