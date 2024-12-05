Component({
  properties: {
    item: {
      type: Object,
      value: {}
    }
  },

  methods: {
    onPreview() {
      this.triggerEvent('preview', { id: this.properties.item.id })
    },

    onDownload() {
      this.triggerEvent('download', { id: this.properties.item.id })
    }
  }
}) 