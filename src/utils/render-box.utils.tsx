export const renderFancyBox = (type: 'success' | 'error') => {
  return (
    <div style={{ color: type === 'success' ? 'green' : 'red', border: '1px solid', padding: '10px' }}>
      {type === 'success' ? '✅ สำเร็จ!' : '❌ เกิดข้อผิดพลาด!'}
    </div>
  )
}
