# models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from .utils import *
from django.utils import timezone



# #  ----------------------------   UserData roles AbstractUser    --------------------------------------- #
class User(AbstractUser):
    id = models.CharField(primary_key=True, max_length=22, default=secure_short_uuid, editable=False)
    balance = models.IntegerField(null=True, blank=True, default=0)
    refer = models.IntegerField(default=generate_random_number)
    role = models.CharField(max_length=20, choices=[
        ('superadmin', 'SuperAdmin'),
        ('admin', 'Admin'),
        ('staff', 'Staff'),
        ('user', 'User'),
        ('developer', 'Developer'),
        
    ], default='user')
    gender = models.CharField(max_length=10,null=True,blank=True)
    ref = models.IntegerField(null=True,blank=True,default=885695)
    # transactions = models.JSONField(default=list,null=True,blank=True)
    state = models.CharField(max_length=20,blank=True)
    district = models.CharField(max_length=25,blank=True)
    pic = models.ImageField(upload_to='Staff_Pic',default='Staff_Pic/profilepic.jpg',blank=True,null=True)
    contact = models.CharField(max_length=10,null=True,blank=True)
    caste = models.CharField(max_length=20,blank=True)
    bank_account = models.CharField(max_length=20,null=True,blank=True,default='Account Number')
    ifsc_code = models.CharField(max_length=20,null=True,blank=True,default='SBIN0989054')
    upi_id = models.CharField(max_length=25,null=True,blank=True,default='upi_id.oksbi')


    def __str__(self):
        return self.username

# #  ----------------------------   UserData roles based all details fetch    --------------------------------------- #

class UserData(models.Model):
    User_id = models.CharField(max_length=22,unique=True)
    refer = models.IntegerField(null=True,blank=True)
    role = models.CharField(max_length=20,default='user')
    username = models.CharField(max_length=30,null=True,blank=True)
    firstname = models.CharField(max_length=20,null=True,blank=True)
    caste = models.CharField(max_length=25,blank=True)
    religion = models.CharField(max_length=20,null=True,blank=True)
    subcaste=models.CharField(max_length=25,null=True,blank=True)

    gender = models.CharField(max_length=10,null=True,blank=True)
    dob = models.CharField(max_length=10,null=True,blank=True)
    age = models.IntegerField(null=True,blank=True)
    contact = models.CharField(max_length=10,null=True,blank=True)
    contact1 = models.CharField(max_length=10,null=True,blank=True)
    address = models.CharField(max_length=400,null=True,blank=True)

    instagram = models.CharField(max_length=30,null=True,blank=True)
    # aadhar = models.IntegerField(null=True,blank=True)
    email = models.EmailField(null=True,blank=True)
    cover_img = models.ImageField(upload_to='User_cover_pic',default='User_cover_pic/floral-ornaments_ZsX1vQs.jpg',blank=True,null=True)
    pic = models.ImageField(upload_to='User_Pic',default='User_Pic/profilepic.jpg',blank=True,null=True)
    district = models.CharField(max_length=25,blank=True)
    state = models.CharField(max_length=20,blank=True)
    city = models.CharField(max_length=20,blank=True)
    country = models.CharField(max_length=10,blank=True,default='India')
    # address = models.TextField(null=True,blank=True)
    like = models.JSONField(default=list,blank=True)
    create_date = models.DateField(auto_now=True)
    user_apply = models.JSONField(default=list,blank=True)
    marrige_status = models.CharField(max_length=10,null=True,blank=True)
    university = models.CharField(max_length=50,null=True,blank=True)
    course = models.CharField(max_length=50,null=True,blank=True)
    job_title = models.CharField(max_length=30,null=True,blank=True)
    job_type = models.CharField(max_length=30,null=True,blank=True)
    Lifestyle =models.CharField(max_length=50,null=True,blank=True)
    created_profile=models.CharField(max_length=50,null=True,blank=True)
    blood_group = models.CharField(max_length=10, blank=True, null=True)
    Hobbies =models.CharField(max_length=50,null=True,blank=True)
    # address = models.TextField()
    # description= models.CharField(max_length=300,null=True,blank=True)
    
    
    # social/profile urls (optional)
    linkedin_url = models.URLField(max_length=500, blank=True, null=True)
    facebook_url = models.URLField(max_length=500, blank=True, null=True)
    youtube_url = models.URLField(max_length=500, blank=True, null=True)
    instagram_url = models.URLField(max_length=500, blank=True, null=True)
    profile_url = models.URLField(max_length=500, blank=True, null=True)
    
    
    salary = models.IntegerField(null=True,blank=True)
    father_name = models.CharField(max_length=50,null=True,blank=True)
    mother_name = models.CharField(max_length=50,null=True,blank=True)
    brother = models.IntegerField(null=True,blank=True)
    brother_marrige = models.IntegerField(null=True,blank=True)
    sister = models.IntegerField(null=True,blank=True)
    sister_marrige = models.IntegerField(null=True,blank=True)
    mother_tongue = models.CharField(max_length=20)
    height = models.CharField(max_length=10)
    ref = models.IntegerField(null=True,blank=True)
    bank_account = models.CharField(max_length=20,null=True,blank=True,default='0000000000')
    ifsc_code = models.CharField(max_length=20,null=True,blank=True,default='SBIN0989054')
    upi_id = models.CharField(max_length=25,null=True,blank=True,default='upi_id.oksbi')

    def __str__(self):
        return self.username
    
# #  ----------------------------   User_Caste   --------------------------------------- #
class User_Caste(models.Model):
    religion = models.CharField(max_length=20,null=True,blank=True)
    state=models.CharField(max_length=50,blank=True,null=True)
    caste=models.JSONField(blank=True,default=list)

# #  ----------------------------   User_State   --------------------------------------- #
class User_State(models.Model):
    state=models.CharField(max_length=50,blank=True,null=True)
    district=models.JSONField(blank=True,default=list)
    
# #  ----------------------------   UserImages   --------------------------------------- #
class UserImages(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    user_id = models.CharField(max_length=22,null=True,blank=True)
    images = models.ImageField(upload_to='User_images',blank=True)
    cover_img = models.ImageField(upload_to='User_cover_pic',default='User_Pic/profilepic.jpg',blank=True,null=True)
    
    
# #  ----------------------------   PostCharges   --------------------------------------- #

class PostCharges(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    post_charges = models.IntegerField()
    staff_commission = models.IntegerField()

# #  ----------------------------   UserTotalRevenue   --------------------------------------- #

class UserTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    user_id = models.CharField(max_length=22,null=True,blank=True)
    user_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"

#  ----------------------------   AdminTotalRevenue   --------------------------------------- #
class AdminTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    admin_id = models.CharField(max_length=22,null=True,blank=True)
    admin_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date" 
    

#  ----------------------------   StaffTotalRevenue   --------------------------------------- #
class StaffTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    staff_id = models.CharField(max_length=22,null=True,blank=True)
    staff_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"
    
#  ----------------------------   DevTotalRevenue   --------------------------------------- #
class DevTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    dev_id = models.CharField(max_length=22,null=True,blank=True)
    dev_amount = models.CharField(max_length=22,null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"
    


# #  ----------------------------   StaffTransactions   --------------------------------------- #
# class StaffTransactions(models.Model):
#     id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
#     staff_id = models.CharField(max_length=25)
#     amount = models.IntegerField()
#     upi_id = models.CharField(max_length=25,null=True,blank=True)
#     bank_account = models.CharField(max_length=15,null=True,blank=True)
#     contact = models.CharField(max_length=10,null=True,blank=True)
#     ifsc_code = models.CharField(max_length=15,null=True,blank=True)
#     date = models.DateField(auto_now=True)
#     type = models.CharField(max_length=10)
#     status = models.CharField(max_length=8,default='pending')
#     UTI = models.CharField(max_length=25,default='UPI Transaction Id')


#     def __str__(self):
#         return self.username
    
# #  ----------------------------   User_Caste   --------------------------------------- #
class User_Caste(models.Model):
    religion = models.CharField(max_length=20,null=True,blank=True)
    state=models.CharField(max_length=50,blank=True,null=True)
    caste=models.JSONField(blank=True,default=list)

# #  ----------------------------   User_State   --------------------------------------- #
class User_State(models.Model):
    state=models.CharField(max_length=50,blank=True,null=True)
    district=models.JSONField(blank=True,default=list)
    
# #  ----------------------------   UserImages   --------------------------------------- #
class UserImages(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    user_id = models.CharField(max_length=22,null=True,blank=True)
    images = models.ImageField(upload_to='User_images',blank=True)
    cover_img = models.ImageField(upload_to='User_cover_pic',default='User_Pic/profilepic.jpg',blank=True,null=True)
    
    
# #  ----------------------------   PostCharges   --------------------------------------- #

class PostCharges(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    post_charges = models.IntegerField(null=True,blank=True)
    staff_commission = models.IntegerField(null=True,blank=True)
    user_re_com = models.IntegerField(null=True,blank=True)
    
    
class RechargePlan(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    title = models.CharField(max_length=10,null=True,blank=True)
    price = models.IntegerField(null=True,blank=True)
    features = models.JSONField(default=list,null=True,blank=True)

# #  ----------------------------   UserTotalRevenue   --------------------------------------- #

class UserTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    user_id = models.CharField(max_length=22,null=True,blank=True)
    user_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"

#  ----------------------------   AdminTotalRevenue   --------------------------------------- #
class AdminTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    admin_id = models.CharField(max_length=22,null=True,blank=True)
    admin_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date" 
    

#  ----------------------------   StaffTotalRevenue   --------------------------------------- #
class StaffTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    staff_id = models.CharField(max_length=22,null=True,blank=True)
    staff_amount = models.IntegerField(null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"
    
#  ----------------------------   DevTotalRevenue   --------------------------------------- #
class DevTotalRevenue(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    month = models.CharField(max_length=10,null=True,blank=True)
    suser_id = models.CharField(max_length=22,null=True,blank=True)
    ruser_id = models.CharField(max_length=22,null=True,blank=True)
    dev_id = models.CharField(max_length=22,null=True,blank=True)
    dev_amount = models.CharField(max_length=22,null=True,blank=True)
    total_amount = models.IntegerField(null=True,blank=True)
    date = models.DateField(auto_now=True,null=True,blank=True)
    
    def __str__(self):
        return str(self.month) if self.month else "No Date"
    


#  ----------------------------   StaffTransactions   --------------------------------------- #
class StaffTransactions(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    staff_id = models.CharField(max_length=25)
    amount = models.IntegerField()
    upi_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.CharField(max_length=15,null=True,blank=True)
    contact = models.CharField(max_length=10,null=True,blank=True)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True)
    date = models.DateField(auto_now=True)
    type = models.CharField(max_length=10)
    status = models.CharField(max_length=8,default='pending')
    UTI = models.CharField(max_length=25,default='UPI Transaction Id')


#  ----------------------------   UserTransactions   --------------------------------------- #
class UserTransactions(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    user_id = models.CharField(max_length=25)
    amount = models.IntegerField()
    upi_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.CharField(max_length=15,null=True,blank=True)
    contact = models.CharField(max_length=10,null=True,blank=True)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True)
    date = models.DateField(auto_now=True)
    type = models.CharField(max_length=10)
    status = models.CharField(max_length=8,default='pending')
    UTI = models.CharField(max_length=15,default='UPI Transaction Id')


#  ----------------------------   DevTransactions  --------------------------------------- #

class DevTransactions(models.Model):
    id = models.CharField(primary_key=True,max_length=22,default=secure_short_uuid,editable=False)
    dev_id = models.CharField(max_length=25)
    amount = models.IntegerField()
    upi_id = models.CharField(max_length=25,null=True,blank=True)
    bank_account = models.CharField(max_length=15,null=True,blank=True)
    contact = models.CharField(max_length=10,null=True,blank=True)
    ifsc_code = models.CharField(max_length=15,null=True,blank=True)
    date = models.DateField(auto_now=True)
    type = models.CharField(max_length=10)
    status = models.CharField(max_length=8,default='pending')
    UTI = models.CharField(max_length=15,default='UPI Transaction Id')

# ---------------------------- Phone Otp ------------------------------------------#

class PhoneOTP(models.Model):
    contact = models.CharField(max_length=15, unique=True, null=True)
    otp = models.CharField(max_length=6, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    def is_expired(self):
        return timezone.now() > self.created_at + timezone.timedelta(minutes=5)
    
#  ----------------------------   EmailOTP  --------------------------------------- #
class EmailOTP(models.Model):
    email = models.EmailField(unique=True)
    otp = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)

    def is_expired(self):
        return timezone.now() > self.created_at + timezone.timedelta(minutes=2)
    
    
#  ----------------------------  ContactDetails    -------------------------------------- # 


class ContactDetails(models.Model):
    name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(unique=True)  # Better than CharField for emails
    mobile = models.CharField(max_length=15, unique=True)  # Use CharField for phone numbers
    message = models.TextField()  # Fixed spelling from "messege" to "message"

    def __str__(self):
        return f"{self.name} - {self.email}"

#  ----------------------------  SuccessStory    -------------------------------------- # 

class SuccessStory(models.Model):
    name = models.CharField(max_length=100)  # Example: "Raghav Singh & Tanya Bhatnagar"
    img = models.ImageField(upload_to='success_stories/')  # Stores uploaded images
    text = models.TextField()  # Example: Story/experience
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set when created
    updated_at = models.DateTimeField(auto_now=True)      # Automatically set when updated

    def __str__(self):
        return self.name
  