import ContactSidebar from '@/components/contacts/contact-sidebar';
import React from 'react';

const ContactPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-7 gap-3">
      <div className="col-span-2">
        <ContactSidebar />
      </div>
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default ContactPage;
