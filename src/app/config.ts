export const constant = {
    IMAGE_PATH: "http://localhost:3001/uploads/category/",
    API_URL:'http://localhost:3001/api/'
    
}

export const editor = {
    editorConfig : {
        height: '300',
        toolbar: [
          { name: 'document', items: ['Source', '-', 'NewPage', 'Preview', '-', 'Templates'] },
          { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
          { name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll'] },
          { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
          '/',
          { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
          { name: 'colors', items: ['TextColor', 'BGColor'] },
          { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
          { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
          { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
          // Thêm các tùy chọn khác tùy thuộc vào nhu cầu của bạn
        ],
        filebrowserUploadUrl: 'http://localhost:3001/uploads',
        filebrowserUploadMethod: 'xhr',
        extraPlugins: 'uploadimage,image',
        imageUploadUrl: 'http://localhost:3001/uploads',
        imageUploadMethod: 'xhr',
      }

}
