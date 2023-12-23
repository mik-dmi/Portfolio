import React from 'react'

interface SectionHeadingsProps {
    subHeader: string;
    header: string;
  }

function SectionHeadings({ subHeader, header }: SectionHeadingsProps) {
    return (
    <div>
        <p className='text-primary'>{subHeader} </p>
        <h2 className=' text-3xl sm:text-6xl font-bold headersColor pb-4'>{header}</h2>

    </div>
  )
}

export default SectionHeadings