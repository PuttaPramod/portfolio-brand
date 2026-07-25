import { Component,inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {

  loading = false;
  private fb = inject(FormBuilder);

  constructor() {}

  contactForm = this.fb.group({

    name: ['', Validators.required],

    email: ['', [Validators.required, Validators.email]],

    subject: ['', Validators.required],

    message: ['', Validators.required]

  });

  sendMessage() {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    const data = {

  from_name: this.contactForm.value.name,

  from_email: this.contactForm.value.email,

  title: this.contactForm.value.subject,

  message: this.contactForm.value.message

};

    // Send mail to yourself
    emailjs.send(

      'pramod_kumar24',

      'template_email',

      data,

      'vcuuMXIUGWcLGcCZU'

    ).then(() => {

      // Auto Reply
      emailjs.send(

        'pramod_kumar24',

        'template_xipnyis',

        data,

        'vcuuMXIUGWcLGcCZU'

      ).then(() => {

        alert('Message Sent Successfully ✅');

        this.contactForm.reset();

        this.loading = false;

      });

    }).catch((error) => {

      alert('Failed to Send Message ❌');

      this.loading = false;
      console.log("Status:", error.status);

  console.log("Text:", error.text);


    });

  }

}