import NextImage from 'next/image'

function normalizeDimension(value) {
  if (typeof value === 'string' && value.endsWith('px')) {
    return Number.parseInt(value, 10)
  }

  return value
}

// Preserve support for legacy next/image props while running on newer Next.js.
// eslint-disable-next-line jsx-a11y/alt-text
const Image = ({
  fill,
  layout,
  objectFit,
  objectPosition,
  sizes,
  style,
  width,
  height,
  ...rest
}) => {
  const shouldFill = fill || layout === 'fill'
  const nextStyle = {
    ...style,
    ...(objectFit ? { objectFit } : {}),
    ...(objectPosition ? { objectPosition } : {}),
  }

  return (
    <NextImage
      {...rest}
      fill={shouldFill}
      sizes={shouldFill ? sizes || '100vw' : sizes}
      style={nextStyle}
      width={shouldFill ? undefined : normalizeDimension(width)}
      height={shouldFill ? undefined : normalizeDimension(height)}
    />
  )
}

export default Image
