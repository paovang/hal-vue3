import { defineComponent } from 'vue'

export const RenderFancyBox = defineComponent({
  props: {
    type: { type: String as () => 'success' | 'error', required: true }
  },
  setup(props) {
    return () => (
      <div style={{ color: props.type === 'success' ? 'green' : 'red', border: '1px solid', padding: '10px' }}>
        {props.type === 'success' ? '✅ สำเร็จ!' : '❌ เกิดข้อผิดพลาด!'}
      </div>
    )
  }
})