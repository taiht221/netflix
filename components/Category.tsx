import { Movie } from '../models'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useState } from 'react'
interface CategoryProps {
  title: string
  movies: Movie[]
}

export default function Category({ title, movies }: CategoryProps) {
  const [isMoved, setIsMoved] = useState(false)
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className=''>{title}</h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100 `}
        />
        <ChevronRightIcon className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  )
}
