# from django.contrib import admin
# from .models import *
# # Register your models here.
# admin.site.register(User)
# admin.site.register(UserImages)
# admin.site.register(PostCharges)
# admin.site.register(UserTotalRevenue)
# admin.site.register(AdminTotalRevenue)
# admin.site.register(StaffTotalRevenue)
# admin.site.register(DevTotalRevenue)
# admin.site.register(DevTransactions)
# admin.site.register(StaffTransactions)
# admin.site.register(UserTransactions)
# admin.site.register(UserData)
# admin.site.register(User_Caste)
# admin.site.register(User_State)
# admin.site.register(EmailOTP)
# admin.site.register(ContactDetails)
# admin.site.register(SuccessStory)
# # admin.site.register(Subscriber)
# # admin.site.register(BankDetails)
# # admin.site.register(Suceess_Story)



from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import *

# Register every model with import-export functionality
@admin.register(User)
class UserAdmin(ImportExportModelAdmin):
    pass

@admin.register(UserImages)
class UserImagesAdmin(ImportExportModelAdmin):
    pass

@admin.register(PostCharges)
class PostChargesAdmin(ImportExportModelAdmin):
    pass

@admin.register(UserTotalRevenue)
class UserTotalRevenueAdmin(ImportExportModelAdmin):
    pass

@admin.register(AdminTotalRevenue)
class AdminTotalRevenueAdmin(ImportExportModelAdmin):
    pass

@admin.register(StaffTotalRevenue)
class StaffTotalRevenueAdmin(ImportExportModelAdmin):
    pass

@admin.register(DevTotalRevenue)
class DevTotalRevenueAdmin(ImportExportModelAdmin):
    pass

@admin.register(DevTransactions)
class DevTransactionsAdmin(ImportExportModelAdmin):
    pass

@admin.register(StaffTransactions)
class StaffTransactionsAdmin(ImportExportModelAdmin):
    pass

@admin.register(UserTransactions)
class UserTransactionsAdmin(ImportExportModelAdmin):
    pass

@admin.register(UserData)
class UserDataAdmin(ImportExportModelAdmin):
    pass

@admin.register(User_Caste)
class UserCasteAdmin(ImportExportModelAdmin):
    pass

@admin.register(User_State)
class UserStateAdmin(ImportExportModelAdmin):
    pass

@admin.register(EmailOTP)
class EmailOTPAdmin(ImportExportModelAdmin):
    pass

@admin.register(ContactDetails)
class ContactDetailsAdmin(ImportExportModelAdmin):
    pass
@admin.register(SuccessStory)
class SuccessStoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(RechargePlan)
class SuccessStoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(PhoneOTP)
class SuccessStoryAdmin(ImportExportModelAdmin):
    pass