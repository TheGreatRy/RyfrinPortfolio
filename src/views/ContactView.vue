<template>
  <div class="page-contact">

    <DraggablePanel title="Contact Info" :initial-x="0" :initial-y="0" :width="285" :height="505">
      <p class="contact-blurb">[A short, welcoming message — e.g., "Whether you have a project in mind, a question, or just want to say hello, I'd love to hear from you."]</p>
      <ul class="contact-details">
        <li>
          <strong>Email:</strong>
          <a href="mailto:[your@email.com]">[your@email.com]</a>
        </li>
        <li>
          <strong>LinkedIn:</strong>
          <a href="https://linkedin.com/in/[yourhandle]" target="_blank" rel="noopener">[Your LinkedIn]</a>
        </li>
        <li>
          <strong>GitHub:</strong>
          <a href="https://github.com/[yourhandle]" target="_blank" rel="noopener">[Your GitHub]</a>
        </li>
      </ul>
    </DraggablePanel>

    <DraggablePanel title="Send a Message" :initial-x="303" :initial-y="22" :width="605" :height="498">
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" type="text" placeholder="Jane Smith" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="jane@example.com" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input id="subject" v-model="form.subject" type="text" placeholder="What's this about?" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="6" placeholder="Your message here..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="submitted">
          {{ submitted ? 'Message Sent!' : 'Send Message' }}
        </button>
      </form>
    </DraggablePanel>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import DraggablePanel from '../components/DraggablePanel.vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  // TODO: Replace with your real form submission logic
  console.log('Form submitted:', { ...form })
  submitted.value = true
}
</script>
